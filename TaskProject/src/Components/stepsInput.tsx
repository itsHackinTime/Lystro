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
    <View style={styles.switchContainer}>
      <Text>{ordered ? `Step ${stepNum}:` : `Item ${stepNum}:`}</Text>
      <TextInput 
        editable
        placeholder={ordered ? `Step ${stepNum}:` : `Item ${stepNum}:`}
        onChangeText={text => onChangeText({text, id: step.id, step: stepNum })}
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