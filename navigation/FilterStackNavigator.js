import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const FilterStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Filters'}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default FilterStackNavigator;
