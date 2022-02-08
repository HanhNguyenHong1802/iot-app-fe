import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/actions/deviceAction';
import CardDevices from './components/CardDevices';

const Devices = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, []);

  const device = useSelector(state => state.device)

  return <>
    <View style={{ height: 100, backgroundColor: '#F96332' }}>
      <Image source={require('../../../assets/images/avt.jpg')} style={{ height: 30, width: 30 }} alt="avt" />
      {
        device?.state?.devices?.length > 0 && device?.state?.devices?.map((item) =>
          <CardDevices item={item} key={item?._id} />
        )
      }


    </View>
  </>;
}
export default Devices
