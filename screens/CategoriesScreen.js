import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoriesScreen = ({scene, previous, navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>The categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() =>
          navigation.navigate('MealDetail', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
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

export default CategoriesScreen;
