import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawerContent from './src/screens/CustomDrawerContent'; 

//screens 
import HomeScreen from './src/screens/HomeScreen';
import DailyInstallReport from './src/screens/DailyInstallReport';
import UpdateProfile from './src/screens/UpdateProfile';
import AddProject from './src/screens/AddProject';
import AddUser from './src/screens/AddUser';
import DeleteUser from './src/screens/DeleteUser';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen  name="Home" component={HomeScreen} />
        <Drawer.Screen  name="DailyInstallReport" component={DailyInstallReport} />
        <Drawer.Screen  name="UpdateProfile" component={UpdateProfile} />
        <Drawer.Screen  name="AddProject" component={AddProject} />
        <Drawer.Screen  name="AddUser" component={AddUser} />
        <Drawer.Screen  name="DeleteUser" component={DeleteUser} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

