import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Image, Text, TextInput, View, Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, updateDevice } from '../../../redux/actions/deviceAction';
import { useEffect } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { iDate } from '../../../../utils/iDate';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CardDetail({ route, item }) {
  const id = route.params?.id

  const dispatch = useDispatch()
  const device = useSelector(state => state.device)
  const [deviceDetail, setDeviceDetail] = useState()
  const [listHistory, setListHistory] = useState([])
  const [arrLabel, setArrLabel] = useState([])
  const [arrCo2, setArrCo2] = useState([])
  const [arrDust, setArrDust] = useState([])
  const [arrHumidity, setArrHumidity] = useState([])
  const [arrTemperature, setArrTemperature] = useState([])
  const navigate = useNavigation()
  let label = []
  let co2 = []
  let dust = []
  let humidity = []
  let temperature = []
  const [connectState, setConnectState] = useState(false)
  const [deviceName, setDeviceName] = useState('')

  const handleSave = () => {
    let tmp

    if (deviceName !== '') {
      let state = connectState ? "ON" : "OFF"
      tmp = `{"deviceName": "${deviceName}", "connectState": "${state}"}`
      let params = JSON.parse(tmp)
      let objectSend = {
        id: deviceDetail?._id,
        body: params
      }
      dispatch(updateDevice(objectSend))
      navigate.navigate('Devices')
    }
  }

  useEffect(() => {
    device?.state?.devices?.every((item) => {
      if (item?._id === id) {
        setDeviceDetail(item)
        setListHistory(item?.stateHistory)
        setConnectState(item?.connectState === 'ON' ? true : false)
        setDeviceName(item?.deviceName)
        if (item?.stateHistory.length > 0) {
          item?.stateHistory?.forEach(element => {
            label.push(iDate(element?.at, '{j}/{n}/{f}, {h}:{m} '))
            co2.push(element?.co2)
            dust.push(element?.dust)
            humidity.push(element?.humidity)
            temperature.push(element?.temperature)
          });

          label = label.slice(label?.length - 11, label?.length - 1).reverse()
          setArrLabel(label)
          co2 = co2.slice(co2?.length - 11, co2?.length - 1).reverse()
          setArrCo2(co2)
          dust = dust.slice(dust?.length - 11, dust?.length - 1).reverse()
          setArrDust(dust)
          humidity = humidity.slice(humidity?.length - 11, humidity?.length - 1).reverse()
          setArrHumidity(humidity)
          temperature = temperature.slice(temperature?.length - 11, temperature?.length - 1).reverse()
          setArrTemperature(temperature)
        }
        return false
      }
      else return true
    })

  }, [id]);

  return <SafeAreaView>
    <ScrollView>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 28 }}>Card Detail</Text>
        <Text style={{ fontSize: 18, padding: 10 }}>Card id</Text>
        <View pointerEvents="none">
          <TextInput placeholder='id' defaultValue={deviceDetail?._id} style={{ backgroundColor: '#E3E6E8', borderRadius: 30, width: '50%', height: 30, paddingLeft: 10 }} />
        </View>
        <Text style={{ fontSize: 18, padding: 10 }}>Card name</Text>
        <TextInput onChangeText={e => setDeviceName(e)} placeholder='name' defaultValue={deviceDetail?.deviceName} style={{ backgroundColor: '#E3E6E8', borderRadius: 30, width: '50%', height: 30, paddingLeft: 10 }} />
        <Text style={{ fontSize: 18, padding: 10 }}>Connect State</Text>
        <Checkbox onPress={e => setConnectState(!connectState)} status={connectState ? "checked" : "unchecked"} />
        <TouchableOpacity onPress={handleSave} style={{ width: 200, backgroundColor: '#F96332', padding: 10, borderRadius: 30 }}><Text style={{ textAlign: 'center', color: 'white' }}>Save</Text></TouchableOpacity>
      </View>
      {
        arrLabel?.length > 0 &&
        <View>
          <Text>Co2</Text>
          <BarChart
            data={{
              labels: arrLabel,
              datasets: [
                {
                  data: arrCo2
                }
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <Text>Dust</Text>
          <BarChart
            data={{
              labels: arrLabel,
              datasets: [
                {
                  data: arrDust
                }
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <Text>Humidity</Text>
          <BarChart
            data={{
              labels: arrLabel,
              datasets: [
                {
                  data: arrHumidity
                }
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <Text>Temperature</Text>
          <BarChart
            data={{
              labels: arrLabel,
              datasets: [
                {
                  data: arrTemperature
                }
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}

            chartConfig={{
              horizontalLabelRotation: 110,
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      }
    </ScrollView >
  </SafeAreaView>;
}
