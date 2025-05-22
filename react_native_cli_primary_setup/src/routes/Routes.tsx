// In App.js in a new project

import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import MyTabs from './BottomRoutes';
import MyDrawer from './DrawerRoutes';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarAnimation: 'fade',
        statusBarStyle: 'dark',
        statusBarBackgroundColor: 'white',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default RootStack;
