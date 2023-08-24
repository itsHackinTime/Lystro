import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// styling 
import styles from '../styles/styles'
// interfaces
import { AddTaskScreenProps } from '../types/types';
import DropDownPicker from 'react-native-dropdown-picker'
const AddTaskScreen: FC<AddTaskScreenProps> = ({navigation}) => {
  const [text, onChangeText] = useState('')
  const [category, onCatChange] = useState('')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{
      label: '1',
      value: 1,
    }, {
      label: '2',
      value: 2,
    }, {
      label: '3',
      value: 3,
    }, {
      label: '4',
      value: 4,
    }, {
      label: '5',
      value: 5,
    }
  ])
 
  return (
    <View style={styles.addContainer}>
      <TextInput
        style={[ styles.input]}
        editable
        placeholder='Task'
        onChangeText={(text) => onChangeText(text)}
        value={text}
      />
     <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ justifyContent: 'center'}}
        containerStyle={{alignItems: 'center', width: '90%', marginVertical: 10}}
      />
      <TextInput
        style={[ styles.input]}
        editable
        placeholder='Category'
        onChangeText={(text) => onCatChange(text)}
        value={category}
      />
      <View>
        
      </View>
    </View>
  );
};

export default AddTaskScreen;
