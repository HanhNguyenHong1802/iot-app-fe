import React, { useEffect } from 'react';
import { Image, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/actions/deviceAction';
import CardDevices from './components/CardDevices';
import { logout } from '../../redux/actions/authenActions';
import { useNavigation } from '@react-navigation/native';

const Devices = () => {
  const dispatch = useDispatch()
  const navigate = useNavigation()
  useEffect(() => {
    dispatch(getList())
  }, []);

  const device = useSelector(state => state.device)
  const logoutUser = useSelector(state => state.logout)

  const handleLogout = () => {
    dispatch(logout())
    if (logoutUser)
      navigate.navigate('Welcome')
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
      <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row-reverse', backgroundColor: 'white', padding: 10, borderRadius: 30 }}><Text>Logout</Text></TouchableOpacity>
    </View>
    <FlatList
      data={device?.state?.devices}
      renderItem={item => <CardDevices item={item?.item} />}
      keyExtractor={item => item?.item?._id}
    />



  </SafeAreaView>;
}
export default Devices
