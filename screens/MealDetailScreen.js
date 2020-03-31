import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealDetailScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    <View style={styles.screen}>
      <Text>
        The meal detail Screen {itemId} {otherParam}
      </Text>
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
