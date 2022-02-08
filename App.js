import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import Devices from './src/screens/Devices';
import Login from './src/screens/Login/index';
import Welcome from './src/screens/Welcome/index';
import { navigationRef } from './RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from './RootNavigation'
import CardDetail from './src/screens/Devices/components/CardDetail';
const Stack = createNativeStackNavigator();
export default function App() {

  let isAuthenticated = ''

  const getCookie = async () => {
    isAuthenticated = await AsyncStorage.getItem('@currentuser')
  }

  useEffect(() => {
    getCookie().then((res) => {
      if (isAuthenticated !== '' && isAuthenticated) RootNavigation.navigate('Devices');
      else RootNavigation.navigate('Login');
    }).catch((err)=> console.log(err))
  }, []);

  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <Welcome />
    //   </View>
    // </NavigationContainer>

    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Devices"
            component={Devices}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CardDetail"
            component={CardDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
