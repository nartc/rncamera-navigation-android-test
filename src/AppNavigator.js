import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, withNavigationFocus } from 'react-navigation';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

const Camera = props => {
  return props.isFocused ? (
    <View style={{flex: 1}}>
      <RNCamera
      style={{flex: 1, width: '100%', overflow: 'hidden'}}
      androidCameraPermissionOptions={{title: 'Camera', message: 'Camera'}}
      pendingAuthorizationView={<ActivityIndicator />}
    >
      <View>
        <Text>Testing Subview</Text>
      </View>
    </RNCamera>
    </View>
  ) : <View>
    <ActivityIndicator/>
  </View>;
};

const homeStack = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
  },
);

const cameraStack = createStackNavigator(
  {
    Camera: {screen: withNavigationFocus(Camera)},
  },
  {
    initialRouteName: 'Camera',
  },
);

const tabNavigator = createBottomTabNavigator({
	HomeStack: homeStack,
	CameraStack: cameraStack
}, {
	initialRouteName: 'HomeStack'
});

export default createAppContainer(tabNavigator);
