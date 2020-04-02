import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritiesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FavoritesNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Favorites"
      tabBarOptions={{
        activeTintColor: 'white',
        // inactiveTintColor:Colors.primaryColor,
        style: {color: '#eee', backgroundColor: Colors.primaryColor},
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
              style={StyleSheetFactory.getSheet(focused, color).iconColor}
            />
          ),
        }}>
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{title: '-- Meal Detail --'}}
        />
      </Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavoritiesScreen}
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
};

export default FavoritesNavigator;

class StyleSheetFactory {
  static getSheet(focused, color) {
    return StyleSheet.create({
      iconColor: {
        color: focused ? color : 'black',
      },
    });
  }
}
