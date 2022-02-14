import * as React from 'react';
import Icon from 'react-native-ionicons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardDevices = ({ item, route }) => {
  const navigate = useNavigation()
  return (
    <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderBottomColor: '#222' }} onPress={() => navigate.navigate('CardDetail', { id: item?._id, item: item })}>
      <Card.Content>
        <Title>{item?.deviceName}</Title>
        <Paragraph>Device Id: {item?._id}</Paragraph>
      </Card.Content>

      <MapView
        style={{ width: '100%', height: 200 }}
        initialRegion={{
          latitude: item?.location[0],
          longitude: item?.location[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={{ latitude: parseFloat(item?.location[0]), longitude: parseFloat(item?.location[1]) }}
        /> */}
      </MapView>
      <Card.Actions style={{ placeSelf: 'end' }}>
        {/* <Image source={require('../../../../assets/images/eye-svgrepo-com.svg')} alt="img" /> */}
        <Button style={{ color: 'red' }}>Delete</Button>
      </Card.Actions>
    </Card>
  )
};

export default CardDevices;