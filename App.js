import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'


//NAVIGATION SETUP!-------------------------------------------------------

const Drawer = createDrawerNavigator();

//side drawer UI
import CustomDrawerContent from './src/screens/CustomDrawerContent'; 

//screens 
import HomeScreen from './src/screens/HomeScreen';
import DailyInstallReport from './src/screens/DailyInstallReport';
import Profile from './src/screens/Profile';
import AddProject from './src/screens/AddProject';
import AddUser from './src/screens/AddUser';
import DeleteUser from './src/screens/DeleteUser';
import Login from './src/screens/Login'; 

//------------------------------------------------------------------------

//REDUX SETUP!------------------------------------------------------------

import reducers from './src/redux/reducers'; 
let store = createStore(reducers); 

//------------------------------------------------------------------------

function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Login"
        drawerContent={ props => <CustomDrawerContent {...props} /> }
      >
        <Drawer.Screen  name="Home"               component={HomeScreen}          />
        <Drawer.Screen  name="DailyInstallReport" component={DailyInstallReport}  />
        <Drawer.Screen  name="Profile"            component={Profile}             />
        <Drawer.Screen  name="AddProject"         component={AddProject}          />
        <Drawer.Screen  name="AddUser"            component={AddUser}             />
        <Drawer.Screen  name="DeleteUser"         component={DeleteUser}          />
        <Drawer.Screen  name="Login"              component={Login}               />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return(
    <Provider store={store}>
      <Main />
    </Provider>
  )
}