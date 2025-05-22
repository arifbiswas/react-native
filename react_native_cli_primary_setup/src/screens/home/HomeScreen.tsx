import {Button, Text, View} from 'react-native';

import {Header} from '@react-navigation/elements';
import React from 'react';
import tw from '../../../lib/tailwind';

const HomeScreen = ({navigation, route}: any) => {
  return (
    <>
      {navigation.canGoBack() && (
        <>
          {(route?.name as string) === 'Home' && (
            <Header
              title="Home"
              back={{
                href: 'back',
                title: 'Back',
              }}
            />
          )}
        </>
      )}

      <View style={tw`flex-1 items-center justify-center bg-white`}>
        <View
          style={tw`  border border-gray-50 shadow-blue-700 shadow p-6 rounded-lg justify-center items-center`}>
          <Text style={tw`text-2xl font-bold text-gray-800`}>
            Welcome to Home!
          </Text>
          <Text style={tw`text-lg text-gray-600 mt-2`}>
            This is the home screen of your app.
          </Text>
          <Text style={tw`text-lg text-gray-600 mt-2`}>
            This the drawer screen of your app.
          </Text>
        </View>
        <View style={tw`gap-4 mt-4 justify-center items-center`}>
          <Text style={tw`text-lg text-gray-600 mt-2`}>Routes Part</Text>
          <Button
            title="Open Drawer"
            onPress={() => {
              // Add your navigation logic here to open the drawer
              // For example, if you're using React Navigation:
              navigation.navigate('Drawer');
            }}
          />
          <Button
            title="Open Tabs"
            onPress={() => {
              // Add your navigation logic here to open the drawer
              // For example, if you're using React Navigation:
              navigation.navigate('Tabs');
            }}
          />
        </View>
        <View style={tw`mt-4 justify-center items-center`}>
          <Text style={tw`text-lg text-gray-600 mt-2`}>
            This is the Design Part
          </Text>
          <Text style={tw`text-lg text-green-600 mt-2`}>HomeScreen</Text>
          <Text style={tw`text-lg text-blue-600 mt-2`}>HomeScreen</Text>
          <Text style={tw`text-lg text-pink-600 mt-2`}>HomeScreen</Text>
          <Button
            title="Normal Routes"
            onPress={() => {
              // Add your navigation logic here to open the drawer
              // For example, if you're using React Navigation:
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
