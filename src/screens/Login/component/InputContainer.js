//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { interpolateNode } from 'react-native-reanimated';
// create a component
const InputContainer = ({ arrowOpacityAnimation, cbUsername, cbPass }) => {

  const confirmPasswordY = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [-50, 0]
  })

  const viewY = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [0, -50]
  })

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: viewY }] }]}>
      <View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        <Feather name="user" color="black" size={25} />
        <TextInput
          placeholder="Username"
          style={{ marginLeft: 5, paddingRight: 20 }}
          onChangeText={(e) => cbUsername(e)} />
      </View>

      <View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Feather name="lock" color="black" size={25} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={{ marginLeft: 5, paddingRight: 100 }}
            textContentType='password'
            onChangeText={(e) => cbPass(e)}

          />
        </View>

        <Feather name="eye" color="black" size={20} />
      </View>

      <Animated.View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 40,
          paddingHorizontal: 20,
          opacity: 1,
          transform: [{ translateY: confirmPasswordY }],
          zIndex: -1,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Feather name="lock" color="black" size={25} />
          <TextInput placeholder="Confirm Password" style={{ marginLeft: 5 }} />
        </View>
        <Feather name="eye" color="black" size={20} />
      </Animated.View>
    </Animated.View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 140,
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default InputContainer;
