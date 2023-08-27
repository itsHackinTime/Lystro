import React, {FC} from 'react';
import  AddTaskScreen  from '../screens/AddTaskScreen';
import  HomeScreen  from '../screens/HomeScreen';
import  SettingsScreen  from '../screens/SettingsScreen';
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import styles from '../styles/styles'
import { RootStackParamList, TabType} from '../types/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator<RootStackParamList>();


const Tabs: FC = () => {

  
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is visible
      tabBarStyle: {
        display: route.name === 'Add' ? 'none' : 'flex',
        ...styles.navigator,
        ...styles.shadow
      },
    })}
      >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen 
        name='Add'
        component={AddTaskScreen}
        
        />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
    
  )
}

export default Tabs;
