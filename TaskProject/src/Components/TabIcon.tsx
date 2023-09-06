import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function  TabIcon(focused: boolean, name: string) {
  return (
    <Icon
      name={name}
      size={40}
      color={focused ? 'red' : 'black'}
    />
  )
}  