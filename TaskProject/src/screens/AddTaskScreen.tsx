import React, {FC, useState} from 'react';
import {View, TextInput, Button, Text, Switch, FlatList, ListRenderItem, ScrollView, Modal, Pressable, StyleProp, ViewStyle} from 'react-native';

import StepInput from '../Components/stepsInput'

import { StepData, Task  } from '../types/types';
// styling 
import styles from '../styles/styles'
// interfaces
import { AddTaskScreenProps } from '../types/types';
import DropDownPicker from 'react-native-dropdown-picker'
import { useSelector, useDispatch } from 'react-redux';
import  { RootState } from '../app/store'
import { addTask } from '../app/features/taskSlice';
import {
  addTitle, 
  addRating,
  addCategory,
  addSteps,
  removeSteps,
  editSteps,
  changeOrdered
} from '../app/features/addScreenSlice'
const AddTaskScreen: FC<AddTaskScreenProps> = ({navigation}) => {
  
  const dispatch = useDispatch()
  const SubmitTask = (newtask: Task) => {
    dispatch(addTask(newtask));
    // put logic here to reset state for adding task
  }

  const newTask = useSelector((state: RootState) => state.addTaskInputReducer)
  console.log(newTask)
  const [viewModal, setViewModal] = useState(false)
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [value, setValue] = useState(0);
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
    dispatch(addSteps()); 
  }
  const changeStepText = (step: StepData) => {
    dispatch(editSteps(step))
  }
  const deleteStep = (step: StepData) => {
    dispatch(removeSteps(step))
  }
  const renderSteps: ListRenderItem<StepData> = (step) => {
    return (
      <StepInput step={step.item}
        deleteStep={() => deleteStep(step.item)} 
        onChangeText={(text) => changeStepText(text)}
        stepNum={step.item.step}
        ordered={newTask.ordered}        
      />
    )
  }
  const [ordered, setOrder] = useState(false);
  const toggleSwitch = () => {
    dispatch(changeOrdered())
  }
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
        onChangeText={(text) => dispatch(addTitle(text))}
        value={newTask.title}
      />
     <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles[value as keyof typeof styles] as StyleProp<ViewStyle>}
        containerStyle={[{alignItems: 'center', width: '90%', marginVertical: 10, zIndex: 6000, }] }
        listMode='SCROLLVIEW'
        placeholderStyle={{
          color: "#c8c8ca",
        }}
        placeholder='Priority (5 is important)'
        showTickIcon={false}
        // selectedItemContainerStyle={[styles.selectedItem, styles[value as keyof typeof styles]]}
        listMessageContainerStyle={styles[value as keyof typeof styles] as StyleProp<ViewStyle>}
        selectedItemContainerStyle={[styles.selectedItem, styles[value as keyof typeof styles] as StyleProp<ViewStyle>]}
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
      <Modal
        animationType='fade'
        transparent={false}
        visible={viewModal}
      >
      <FlatList
        data={newTask.steps}
        renderItem={renderSteps}
        keyExtractor={item => item.id}
        extraData={newTask.ordered}
        />  
      <View
        style={styles.switchContainer}
        >
        <View
          style={{alignItems: 'flex-start', backgroundColor: `${newTask.ordered ? '#81b0ff' : '#ffffff'}`, borderWidth: 1, borderRadius: 8}}
          >
          <Button
            title={newTask.ordered ? 'Add Step' : 'Add Item'}
            color={newTask.ordered ? '#ffffff' : '#81b0ff'}
            onPress={addStep}
            />
        </View>
        <Switch 
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={newTask.ordered ? '#ffb3ba' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={newTask.ordered}
          />
      </View>
      <Button
      onPress={() => setViewModal(!viewModal)}
      title='close'
      />
      
      </Modal>
       <Pressable
       onPress={() => setViewModal(!viewModal)}
       >
         <Text>Add/Edit Steps</Text>
       </Pressable>
    </View>
  );
};

export default AddTaskScreen;
