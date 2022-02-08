//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { interpolateNode } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const ButtonContainer = ({ arrowOpacityAnimation, cb }) => {

  const loginOpacity = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  const signUpOpacity = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: loginOpacity,
          height: 50,
          width: '70%',
          backgroundColor: '#74B5FF',
          elevation: 5,
          borderRadius: 40,
          
        }}
      >
        <TouchableOpacity 
        style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
        onPress={(e)=> cb(e)}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: signUpOpacity,
          height: 50,
          width: '70%',
          backgroundColor: '#6070FF',
          elevation: 5,
          borderRadius: 40,
          position: 'absolute',
        }}
      >
        <TouchableOpacity style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    height: 50,
    width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ButtonContainer;
