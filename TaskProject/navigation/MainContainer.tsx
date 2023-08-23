import React, {FC} from 'react';
import  DetailsScreen  from './screens/DetailsScreen';
import  HomeScreen  from './screens/HomeScreen';
import  SettingsScreen  from './screens/SettingsScreen';
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles/styles'
import { RootStackParamList } from './types/types';
const Tab = createBottomTabNavigator<RootStackParamList>();
const MainContainer: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Details' component={DetailsScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainContainer;
