/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Containers
import MainContainer from './src/navigation/Tabs'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    
    <NavigationContainer>
      <MainContainer/>
    </NavigationContainer>  
 
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  red: {
    backgroundColor: 'red',
    borderRadius: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default App;
