import React, {FC} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';

import styles from '../styles/styles'
import { StepData } from '../types/types';
const dummySteps = [
  { id: 'b4d3a9fc-248d-4b27-87f6-3363f4b8d40d', text: 'Step 1: Prepare the ingredients', selected: false },
  { id: 'd1e4f6c2-5a5a-4347-9819-18ca3260487a', text: 'Step 2: Mix everything in a bowl', selected: false },
  { id: '8bf7543d-0a59-4c27-8279-93c2e88ee7dd', text: 'Step 3: Preheat the oven to 350°F', selected: false },
  { id: '9a80ac9c-48e1-4f0c-974f-16f5f4c187ad', text: 'Step 4: Pour the mixture into a baking pan', selected: false },
  { id: 'ac7ebaa6-07d7-4d9a-aa6b-7c9373cfb52c', text: 'Step 5: Bake for 30 minutes', selected: false },
];

type Step = {
  id: string;
  text: string;
};
export const Step = ({text, id, }: StepData) => {
  return (
    <TouchableOpacity
    style={[styles.stepList, {backgroundColor: '#f9c2ff'}]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}