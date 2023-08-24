import React, {FC} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';

import styles from '../styles/styles'

import { ItemProps} from '../types/types';



const Item = ({item, onPress, backgroundColor, textColor}:
ItemProps) => (
  <TouchableOpacity onPress ={onPress} style = {[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>  
); 

export default Item;