import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  cond,
  eq,
  interpolateNode,
  set,
  useCode
} from 'react-native-reanimated';
import { onGestureEvent, withTimingTransition } from 'react-native-redash/lib/module/v1';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../../redux/actions/authenActions';
import { Background, InputContainer, LogoContainer } from "./component";
const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current, { duration: 500 });

  const arrowOpacity = useRef(new Animated.Value(0));
  const arrowOpacityAnimation = withTimingTransition(arrowOpacity.current, {
    duration: 500,
  });

  const signUpGestureHandler = useRef(new Animated.Value(0));
  const onSignUpGestureHandler = onGestureEvent({
    state: signUpGestureHandler.current,
  });

  const backArrowGestureHandler = useRef(new Animated.Value(0));
  const onBackArrowGestureHandler = onGestureEvent({
    state: backArrowGestureHandler.current,
  });

  const accountOpacity = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  useCode(() => set(scale.current, 1.5));
  useCode(() =>
    cond(eq(signUpGestureHandler.current, State.END), [
      set(arrowOpacity.current, 1),
      set(scale.current, 1),
    ])
  );
  useCode(() =>
    cond(eq(backArrowGestureHandler.current, State.END), [
      set(arrowOpacity.current, 0),
      set(scale.current, 1.5),
    ])
  );

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signupOpen, setSignUpOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigation()

  const handleLogin = () => {
    let tmp = `{ "username": "${username}", "password": "${password}" }`
    let params = JSON.parse(tmp)
    dispatch(login(params))
  }

  const handleSignup = () => {
    let tmp = `{ "username": "${username}", "password": "${password}" }`
    let params = JSON.parse(tmp)
    dispatch(signup(params))
  }
  const user = useSelector(state => state.auth)
  useEffect(() => {
    if (user.user && user.token) {
      navigate.navigate('Devices')
    } else {
      return
    }
  }, [user])


  return <View style={styles.container}>
    <Background />
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
        Welcome to SmartIoTApp
      </Text>
      <Image
        source={require('../../../assets/pngwing.com.png')}
        style={{ width: 200, height: 200, top: 100, position: 'absolute' }}
      />
      <View style={{ width, alignItems: 'center', top: 400, position: 'absolute' }}>
        <InputContainer arrowOpacityAnimation={arrowOpacityAnimation} cbUsername={setUsername} cbPass={setPassword} />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            borderRadius: 40,
            width: '100%',
            backgroundColor: '#6070FF',
            color: '#fff',
            marginTop: 20,
            marginBottom: 20
          }}>
          <Text style={{ color: '#fff', width: 220, height: 50, textAlign: 'center', paddingTop: 14 }}>{!signupOpen ? 'LOGIN' : 'SIGNUP'}</Text>
        </TouchableOpacity>
        <Text>----------------------Or-------------------</Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            borderRadius: 40,
            width: '100%',
            backgroundColor: '#6070FF',
            color: '#fff',
            marginTop: 20,
            marginBottom: 20
          }}>
          <Text style={{ color: '#fff', width: 220, height: 50, textAlign: 'center', paddingTop: 14 }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
}

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});