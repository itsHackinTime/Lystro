import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// styling 
import styles from '../styles/styles'
// interfaces
import { DetailsScreenProps } from '../types/types';

const DetailsScreen: FC<DetailsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.one}>
      <Text onPress={() => navigation.navigate('Details')}>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
