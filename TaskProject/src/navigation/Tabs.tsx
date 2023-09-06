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
import Icon from 'react-native-vector-icons/FontAwesome'
import TabIcon from '../Components/TabIcon'
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
      <Tab.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            
           <Icon name={'home'} color={color} size={50} />
            
          )
        }}
      />
      <Tab.Screen 
        name='Add'
        component={AddTaskScreen}
        options={{
          tabBarIcon: ({color}) => (
            
           <Icon name={'plus'} color={color} size={50} />
            
          )
        }}
        />
      <Tab.Screen 
        name='Settings' 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            
           <Icon name={'gear'} color={color} size={50} />
            
          )
        }}
      />
    </Tab.Navigator>
    
  )
}

export default Tabs;
