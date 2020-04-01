import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritiesScreen from '../screens/FavoritesScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'Favorites'}
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
      <Stack.Screen name="Favorites" options={{title: '-- Meal Detail --'}}>
        {() => (
          <Tab.Navigator
            initialRouteName="Meals"
            tabBarOptions={{
              activeTintColor: '#f5a442',
            }}>
            <Tab.Screen
              name="Meals"
              component={CategoriesScreen}
              options={{
                // tabBarLabel: 'My Home',
                tabBarIcon: ({color, focused, size}) => (
                  <MaterialCommunityIcons
                    name={'numeric-1-box-outline'}
                    size={size}
                    style={{color: focused ? color : ''}}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={FavoritiesScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: (props) => {
                  const {focused, size, color} = props;
                  return (
                    <FontAwesome
                      name="star"
                      size={size}
                      color={color}
                      style={{color: focused ? color : ''}}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
