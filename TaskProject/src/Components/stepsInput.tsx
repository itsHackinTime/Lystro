import React, {FC} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

import styles from '../styles/styles'

import { StepProps, StepData} from '../types/types';

const StepInput = ({
  step,
  deleteStep,
  stepNum,
  ordered,
  onChangeText
}:
  StepProps) => (
    <View>
      <Text>{ordered ? `Step ${stepNum + 1}:` : `Item ${stepNum + 1}:`}</Text>
      <TextInput 
        style={[ styles.input]}
        editable
        placeholder={`Step ${stepNum + 1}`}
        onChangeText={text => onChangeText({text, id: step.id})}
        value={step.text}
      />
      <View>
        <Button 
          title='Delete'
          onPress={deleteStep}
        />
      </View>
    </View> 
  ); 

  export default StepInput