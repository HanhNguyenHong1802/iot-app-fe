import * as React from 'react';
import Icon from 'react-native-ionicons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardDevices = ({ item, route }) => {
  const navigate = useNavigation()
  console.log('hihih', navigate)
  return (
    <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} onPress={() => navigate.navigate('CardDetail')}>
      <Card.Content>
        <Title>{item?.deviceName}</Title>
        <Paragraph>Device Id: {item?._id}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions style={{ placeSelf: 'end' }}>
        {/* <Image source={require('../../../../assets/images/eye-svgrepo-com.svg')} alt="img" /> */}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
};

export default CardDevices;