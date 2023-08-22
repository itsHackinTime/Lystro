import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  one: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export interface props {
  navigation: string;
}

const HomeScreen: FC<props> = ({navigation}) => {
  return (
    <View style={styles.one}>
      <Text>Home{navigation}</Text>
    </View>
  );
};

export default HomeScreen;
