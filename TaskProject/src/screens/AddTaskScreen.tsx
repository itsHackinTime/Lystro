import React, {FC, useState} from 'react';
import {View, TextInput, Button, Text, Switch, FlatList, ListRenderItem, ScrollView} from 'react-native';

import StepInput from '../Components/stepsInput'

import { StepData } from '../types/types';
// styling 
import styles from '../styles/styles'
// interfaces
import { AddTaskScreenProps } from '../types/types';
import DropDownPicker from 'react-native-dropdown-picker'
const AddTaskScreen: FC<AddTaskScreenProps> = ({navigation}) => {
  const [text, onChangeText] = useState('')
  const [category, onCatChange] = useState('')
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [value, setValue] = useState(null);
  const [valueCat, setValueCat] = useState(null);
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
  let stepid = 1;
  const [steps, onChangeSteps] = useState<StepData[]>([])
  const addStep = () => {
    onChangeSteps((arr) => [...arr, {id: `$[arr.length]`, text: '' }])
    
  }
  const changeStepText = ({id, text}: StepData) => {
    const copy = steps.map((el) => el.id === id ? {id, text} : el)
    onChangeSteps(() => copy )
  }
  const renderSteps: ListRenderItem<StepData> = (step) => {
    return (
      <StepInput step={step.item}
        deleteStep={function (): void {
        throw new Error('Function not implemented.');
        } } 
        onChangeText={changeStepText}
        stepNum={Number(step.item.id)}
        ordered={ordered}        
      />
    )
  }
  const [ordered, setOrder] = useState(false);
  const toggleSwitch = () => setOrder((ordered) => !ordered)
  const [matches, searchCat] = useState([{
    label: 'cooking',
    value: 'cooking',
    },{
    label: 'cleaning',
    value: 'cleaning',
    },
  ]);
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
        style={[styles[value ? value : 0]]}
        containerStyle={[{alignItems: 'center', width: '90%', marginVertical: 10, zIndex: 6000, }] }
        listMode='SCROLLVIEW'
        placeholderStyle={{
          color: "#c8c8ca",
        }}
        placeholder='Priority (5 is important)'
        showTickIcon={false}
        // selectedItemContainerStyle={[styles.selectedItem, styles[value as keyof typeof styles]]}
        listMessageContainerStyle={[styles[value ? value : 0]]}
        selectedItemContainerStyle={[styles.selectedItem, styles[value ? value : 1]]}
      />
      <DropDownPicker
       searchable={true}
       addCustomItem={true}
       open={openCat}
       value={valueCat}
       items={matches}
       setOpen={setOpenCat}
       setValue={setValueCat}
       setItems={searchCat}
       style={{ justifyContent: 'center'}}
       containerStyle={{alignItems: 'center', width: '90%', marginVertical: 10}}
       listMode='SCROLLVIEW'
       placeholderStyle={{
         color: "#c8c8ca",
       }}
       placeholder='Category'
       showTickIcon={false}
      />  
      <ScrollView>

      <FlatList
        data={steps}
        renderItem={renderSteps}
        keyExtractor={item => item.id}
        extraData={ordered}
      />  
      </ScrollView>
     <View>
     
      <View
        style={styles.switchContainer}
      >
        <View
          style={{alignItems: 'flex-start', backgroundColor: `${ordered ? '#81b0ff' : '#ffffff'}`, borderWidth: 1, borderRadius: 8}}
        >
          <Button
            title={ordered ? 'Add Step' : 'Add Item'}
            color={ordered ? '#ffffff' : '#81b0ff'}
            onPress={addStep}
          />
        </View>
        <Switch 
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={ordered ? '#ffb3ba' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={ordered}
        />
      </View>
     </View>
    </View>
  );
};

export default AddTaskScreen;
