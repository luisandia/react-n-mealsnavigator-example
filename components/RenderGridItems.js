import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const RenderGridItems = ({item}) => {
  const navigation = useNavigation();
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={[styles.gridItem, {backgroundColor: item.color}]}>
      <TouchableCmp
        onPress={() => navigation.navigate('CategoryMeals', {id: item.id})}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default RenderGridItems;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    width: 120,
    textAlign: 'right',
    // alignSelf:'flex-end',
    paddingTop: 100,
  },
});
