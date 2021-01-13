import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import FavoritesNavigator from './FavoritesNavigator';
import MealsNavigator from './MealsNavigator';
import FavoritiesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: 'white',
        // inactiveTintColor:Colors.primaryColor,
        style: {color: '#eee', backgroundColor: Colors.primaryColor},
      }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          // tabBarLabel: 'My Home',
          tabBarIcon: ({color, focused, size}) => (
            <MaterialCommunityIcons
              name={'numeric-1-box-outline'}
              size={size}
              style={StyleSheetFactory.getSheet(focused, color).iconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        // component={FavoritiesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: (props) => {
            const {focused, size, color} = props;
            return (
              <FontAwesome
                name="star"
                size={size}
                style={StyleSheetFactory.getSheet(focused, color).iconColor}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

class StyleSheetFactory {
  static getSheet(focused, color) {
    return StyleSheet.create({
      iconColor: {
        color: focused ? color : 'black',
      },
    });
  }
}
