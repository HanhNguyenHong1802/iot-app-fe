import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, FlatList, Image, RefreshControl, SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authenActions';
import { addDevice, getList } from '../../redux/actions/deviceAction';
import CardDevices from './components/CardDevices';

const Devices = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [deviceid, setDeviceId] = useState('')
  const [deviceName, setDeviceName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigation()
  const [addSuccess, setAddSuccess] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const device = useSelector(state => state.device)
  const logoutUser = useSelector(state => state.logout)

  const handleLogout = () => {
    dispatch(logout())
    navigate.navigate('Login')
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    dispatch(getList())
  }, [])
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const handleAddDevice = async () => {
    let tmp
    if (deviceName !== '' && deviceid !== '') {
      tmp = `{ "embedId": "${deviceid}", "deviceName": "${deviceName}", "connectState": "OFF"}`
      let params = JSON.parse(tmp)
      params.location = [21.024, 105.647]
      dispatch(addDevice(params))
      toggleModal()
    }

  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getList());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const ref = useRef()
  let listViewRef;
  const goTop = () => {
    listViewRef.scrollToOffset({ offset: 0, animated: true })
  }
  return <SafeAreaView>
    <View
      style={{
        height: 100,
        backgroundColor: '#F96332',
        height: 70, display: 'flex',
        flexDirection: 'row', width: '100%',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingRight: 20
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../../assets/images/avt.jpg')} style={{ height: 30, width: 30, borderRadius: 9999, marginLeft: 20 }} alt="avt" />
        <Text style={{ fontSize: 24, marginLeft: 20, color: 'white' }}>Hi, {device?.state?.user?.username}</Text>
      </View>
      <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row-reverse', backgroundColor: 'whitesmoke', padding: 10, borderRadius: 30 }}><Text>+ Add device</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row-reverse', backgroundColor: 'white', padding: 10, borderRadius: 30 }}><Text>Logout</Text></TouchableOpacity>
    </View>
    <FlatList
      ref={(ref) => {
        listViewRef = ref
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      data={device?.state?.devices}
      renderItem={item => <CardDevices item={item?.item} key={item?.item?._id} />}
      keyExtractor={item => item?.item?._id}
      key={item => { item.item?._id }}
      style={{ marginBottom: 100 }}
    />
    {/* <TouchableOpacity onPress={goTop} style={{ padding: 20, backgroundColor: 'red', position: 'absolute' }}>
      <Text>Go Top</Text>
    </TouchableOpacity> */}
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ padding: 30, fontSize: 30 }}>Create Device</Text>
          <Text>Device id</Text>
          <TextInput
            placeholder='Device id'
            style={{ backgroundColor: 'whitesmoke', borderRadius: 30, width: '50%', height: 30, paddingLeft: 10 }}
            onChangeText={(e) => setDeviceId(e)}

          />
          <Text>Device name</Text>
          <TextInput
            placeholder='Device name'
            style={{ backgroundColor: 'whitesmoke', borderRadius: 30, width: '50%', height: 30, paddingLeft: 10 }}
            onChangeText={(e) => setDeviceName(e)}
          />
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Button title="Save" onPress={handleAddDevice} />
            <Button title="Close" onPress={toggleModal} />
          </View>

        </View>
      </Modal>
    </View>

  </SafeAreaView>;
}

export default Devices
