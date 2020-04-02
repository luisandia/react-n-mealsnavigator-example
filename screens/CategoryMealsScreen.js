import React from 'react';
import MealList from '../components/MealList';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
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

export default CategoryMealsScreen;
