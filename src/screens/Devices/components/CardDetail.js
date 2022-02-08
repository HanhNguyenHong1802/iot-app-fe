import React from 'react';
import MapView from 'react-native-maps';
import { Image, View } from 'react-native';
export default function CardDetail() {
  return <View style={{ flex: 1 }}>
    <MapView
      style={{width:'100%', height:400}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>;
}
