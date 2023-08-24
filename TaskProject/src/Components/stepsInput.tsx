import React, {FC} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';

const Item = ({item, onPress, backgroundColor, textColor}:
  ItemProps) => (
    <TouchableOpacity onPress ={onPress} style = {[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>  
  ); 