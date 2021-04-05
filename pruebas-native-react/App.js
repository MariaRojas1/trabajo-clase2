import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Productos from './src/screens/Productos';
import Usuarios from './src/screens/Usuarios';
import Roles from './src/screens/Roles';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="productos" component={Productos} />
        <Drawer.Screen name="roles" component={Roles} />
        <Drawer.Screen name="usuarios" component={Usuarios} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
