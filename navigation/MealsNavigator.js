import {DrawerActions, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

const Stack = createStackNavigator();

export default function MealsNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName={'Categories'}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#ffff',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Favorite"
              iconName={'ios-menu'}
              onPress={() => {
                console.log('Mark as favorite!');
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          </HeaderButtons>
        ),
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
    </Stack.Navigator>
  );
}
