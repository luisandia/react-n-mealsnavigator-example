import React from 'react';
import {StyleSheet, FlatList, Text, View, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from '../constants/Colors';
import RenderGridItems from '../components/RenderGridItems';

const CategoriesScreen = ({scene, previous, navigation}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={({item}) => <RenderGridItems key={item.id} item={item} />}
    />
  );
};

export default CategoriesScreen;
