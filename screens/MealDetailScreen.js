import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

const MealDetailScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>The meal detail Screen </Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
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

export default MealDetailScreen;
