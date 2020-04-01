import React from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useRoute, useNavigation} from '@react-navigation/native';

const CategoryMealScreen = (props) => {
  const {
    route: {
      params: {id},
    },
    navigation,
  } = props;

  const catId = id;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  navigation.setOptions({title: selectedCategory.name});
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
