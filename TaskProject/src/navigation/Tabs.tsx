import React, {FC} from 'react';
import  AddTaskScreen  from '../screens/AddTaskScreen';
import  HomeScreen  from '../screens/HomeScreen';
import  SettingsScreen  from '../screens/SettingsScreen';
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../styles/styles'
import { RootStackParamList } from '../types/types';
const Tab = createBottomTabNavigator<RootStackParamList>();
const Tabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: [
          styles.navigator,
          styles.shadow,
        ],
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Add' component={AddTaskScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default Tabs;
