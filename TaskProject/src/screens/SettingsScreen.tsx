import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// styling 
import styles from '../styles/styles'
// interfaces
import { SettingsScreenProps } from '../types/types';

const SettingsScreen: FC<SettingsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.one}>
      <Text onPress={() => navigation.navigate('Add')}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;