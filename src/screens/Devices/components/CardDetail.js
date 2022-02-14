import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Image, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
export default function CardDetail({ route, item }) {
  const id = route.params?.id
  const [connectState, setConnectState] = useState(false)

  return <View>
    <MapView
      style={{ width: '100%', height: 400 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    <View>
      <Checkbox status={connectState} />
    </View>
  </View>;
}
