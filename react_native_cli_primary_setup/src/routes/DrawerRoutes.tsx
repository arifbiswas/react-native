import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Add your custom items here */}
      {/* <DrawerItem label="Custom Item" onPress={() => alert('Custom Item Pressed')} /> */}
      {/* <DrawerItem label="Logout" onPress={() => alert('Logout Pressed')} /> */}
      {/* And also you can make full custom drawer content */}
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="DrawerHome" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
