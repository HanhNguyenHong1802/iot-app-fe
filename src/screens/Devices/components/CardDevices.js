import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDevice } from '../../../redux/actions/deviceAction';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardDevices = ({ item, route }) => {
  const navigate = useNavigation()
  const dispatch = useDispatch()
  const device = useSelector(state => state.device)
  const handleDelete = (id) => {
    dispatch(deleteDevice(id))
  }

  return (
    <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderBottomColor: '#222' }} >
      <Card.Content>
        <Title>{item?.deviceName}</Title>
        <Paragraph>Device Id: {item?._id}</Paragraph>
      </Card.Content>

      <MapView
        style={{ width: '100%', height: 200 }}
        initialRegion={{
          latitude: parseFloat(item?.location[0]) || 21.022,
          longitude: parseFloat(item?.location[1]) || 105.232,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{ latitude: parseFloat(item?.location[0]) || 21.022, longitude: parseFloat(item?.location[1]) || 105.232 }}
        />
      </MapView>
      <Card.Actions style={{ placeSelf: 'end' }}>
        {/* <Image source={require('../../../../assets/images/eye-svgrepo-com.svg')} alt="img" /> */}
        <Button style={{ color: 'red' }} onPress={() => navigate.navigate('CardDetail', { id: item?._id })}>Detail</Button>
        <Button style={{ color: 'red' }} onPress={() => handleDelete(item?._id)}>Delete</Button>
      </Card.Actions>
    </Card>
  )
};

export default CardDevices;