import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = () => {
  const {
    params: {id},
  } = useRoute();
  console.log(id);
  const navigation = useNavigation();

  const selectedCategory = CATEGORIES.find((cat) => cat.id === id);
  navigation.setOptions({title: selectedCategory.title});
  console.log(selectedCategory);
  return (
    <View style={styles.screen}>
      <Text>The category meal Screen{selectedCategory.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
