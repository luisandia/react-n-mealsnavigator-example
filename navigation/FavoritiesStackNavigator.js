import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritiesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const FavoritiesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Favorities'}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Favorities"
        component={FavoritiesScreen}
        options={{ title: '-- Meal Detail --' }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: '-- Meal Detail --' }}
      />
    </Stack.Navigator>
  );
};

export default FavoritiesStackNavigator;
