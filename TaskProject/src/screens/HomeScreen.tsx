import React, {FC, useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles'

import {HomeScreenProps, ItemData} from '../types/types';
import Item from '../Components/Item'
import { RootState  } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedId} from '../app/features/taskSlice'
const dummySteps = [
  { id: 'b4d3a9fc-248d-4b27-87f6-3363f4b8d40d', text: 'Step 1: Prepare the ingredients', selected: false },
  { id: 'd1e4f6c2-5a5a-4347-9819-18ca3260487a', text: 'Step 2: Mix everything in a bowl', selected: false },
  { id: '8bf7543d-0a59-4c27-8279-93c2e88ee7dd', text: 'Step 3: Preheat the oven to 350°F', selected: false },
  { id: '9a80ac9c-48e1-4f0c-974f-16f5f4c187ad', text: 'Step 4: Pour the mixture into a baking pan', selected: false },
  { id: 'ac7ebaa6-07d7-4d9a-aa6b-7c9373cfb52c', text: 'Step 5: Bake for 30 minutes', selected: false },
].map((step, index) => ({ ...step, step: index + 1 }));

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    rating: 4,
    category: 'Category 1',
    steps: dummySteps, 
    ordered: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    rating: 2,
    category: 'Category 2',
    steps: dummySteps, 
    ordered: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    rating: 5,
    category: 'Category 3',
    steps: dummySteps, 
    ordered: true,
  },
];

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {tasks, selectedId} = useSelector((state: RootState) => state.tasksReducer)

  // const [selectedId, setSelectedId] = useState<string>('');
  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    
    return (
      <Item
        item={item}
        onPress={() => dispatch(setSelectedId(item.id))}
        backgroundColor={backgroundColor}
        textColor={color}

      />
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />  
      {/* <Text onPress={() => navigation.navigate('Home')}>Home Screen</Text> */}
    </View>
  );
};

export default HomeScreen;
