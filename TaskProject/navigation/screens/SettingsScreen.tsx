import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from '../styles/styles'

import { SettingsScreenProps } from '../types/types';

const SettingsScreen: FC<SettingsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.one}>
      <Text onPress={ () => navigation.navigate('Settings') }>Settings</Text>
    </View>
  );
};

export default SettingsScreen;
