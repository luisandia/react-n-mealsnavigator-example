import React from 'react';
import {FlatList} from 'react-native';
import RenderGridItems from '../components/RenderGridItems';
import {CATEGORIES} from '../data/dummy-data';

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
