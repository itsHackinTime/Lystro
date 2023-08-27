import React, {FC} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity, ListRenderItem} from 'react-native';

import styles from '../styles/styles'
import {  useSelector } from 'react-redux'
import { ItemProps} from '../types/types';
import { Step } from './steps'
import { RootState } from '../app/store';
const dummySteps = [
  { id: 'b4d3a9fc-248d-4b27-87f6-3363f4b8d40d', text: 'Step 1: Prepare the ingredients' },
  { id: 'd1e4f6c2-5a5a-4347-9819-18ca3260487a', text: 'Step 2: Mix everything in a bowl' },
  { id: '8bf7543d-0a59-4c27-8279-93c2e88ee7dd', text: 'Step 3: Preheat the oven to 350°F' },
  { id: '9a80ac9c-48e1-4f0c-974f-16f5f4c187ad', text: 'Step 4: Pour the mixture into a baking pan' },
  { id: 'ac7ebaa6-07d7-4d9a-aa6b-7c9373cfb52c', text: 'Step 5: Bake for 30 minutes' },
];

const Item = ({item, onPress, backgroundColor, textColor}:
ItemProps) => {
  const {selectedId} = useSelector((state: RootState) => state.tasksReducer)
  const renderSteps: ListRenderItem<typeof dummySteps[0]> = (step) => {
    return (
      <Step 
      text={step.item.text}
      id={step.item.id}
    
      />
    )
  }
  return (
  <TouchableOpacity onPress ={onPress} style = {[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    <FlatList 
     data={dummySteps}
     renderItem={renderSteps}
     keyExtractor={item => item.id}
     style={item.id === selectedId ? {display : 'flex'} : {display: 'none'}}
    />
  </TouchableOpacity>

  
)
}; 

export default Item;