import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'Categories'}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{title: '-- Meal Detail --'}}
      />
    </Stack.Navigator>
  );
}
