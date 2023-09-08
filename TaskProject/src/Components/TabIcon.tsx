import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/styles";

export default function TabIcon(props: BottomTabBarButtonProps) {
  
  const {children, onPress} = props
  return (
   
    <TouchableOpacity onPress={onPress} style={{maxHeight: 120,alignItems: 'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: styles[1].backgroundColor,minWidth: 105,minHeight: 105,alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 1, marginBottom: 0, ...styles.shadowAdd}}>
      {children}

      </View>
    </TouchableOpacity>
    
  )
}  