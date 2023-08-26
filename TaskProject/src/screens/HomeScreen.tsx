import React, {FC, useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles'

import {HomeScreenProps, ItemData} from '../types/types';
import Item from '../Components/Item'
import { RootState  } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedId} from '../app/features/taskSlice'
const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
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
