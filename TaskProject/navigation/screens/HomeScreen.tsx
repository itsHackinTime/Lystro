import React, {FC} from 'react';
import {View, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles'

import {HomeScreenProps} from '../types/types';

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.one}>
      <Text onPress={() => navigation.navigate('Home')}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
