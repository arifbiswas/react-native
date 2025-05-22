import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {PlatformPressable, Text} from '@react-navigation/elements';
import {useLinkBuilder, useTheme} from '@react-navigation/native';

import {View} from 'react-native';
import tw from '../../lib/tailwind';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();
function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            style={tw`flex-1 items-center justify-center p-4`}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {isFocused ? (
              <Text style={tw`text-base font-medium text-blue-500`}>
                {label as string}
              </Text>
            ) : (
              <Text style={tw`text-base font-medium text-gray-500`}>
                {label as string}
              </Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="ButtonHome" component={HomeScreen} />
      <Tab.Screen name="ButtonHome2" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
