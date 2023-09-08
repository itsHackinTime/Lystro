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
import Icon from 'react-native-vector-icons/Ionicons'
import TabIcon from '../Components/TabIcon'
const Tabs: FC = () => {

  
  return (
    <Tab.Navigator
  
    screenOptions={({route}) => ({
      tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is visible
      
      tabBarStyle: {
        display: route.name === 'Add' ? 'none' : 'flex',
        ...styles.navigator,
        ...styles.shadow,
        
      },
      headerShown: true,
      tabBarShowLabel: false,
      tabBarIcon: ({color, size, focused}) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Add') {
          iconName = focused ? 'create' : 'create-outline';
          
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        
        return <Icon name={iconName} size={50} color={route.name === 'Add' ? '#ffffff' : color}/>
      }
    })}
      >
      <Tab.Screen 
        name='Home'
        component={HomeScreen}
    
      />
      <Tab.Screen 
        name='Add'
        component={AddTaskScreen}
        options={{
          tabBarButton: (props) => <TabIcon{...props}/>,
      
        }}
        />
      <Tab.Screen 
        name='Settings' 
        component={SettingsScreen}
        
      />
    </Tab.Navigator>
    
  )
}

export default Tabs;
