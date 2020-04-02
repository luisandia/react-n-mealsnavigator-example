import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FilterStackNavigator from './FilterStackNavigator';
import MainTabNavigator from './MainTabNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MainTabNavigator">
      <Drawer.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FilterStackNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
