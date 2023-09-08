import React, {useRef} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity, ListRenderItem, Animated, PanResponder, PanResponderInstance, Dimensions, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';

import styles from '../styles/styles'
import {  useSelector } from 'react-redux'
import { ItemProps, StepData} from '../types/types';
import { Step } from './steps'
import { RootState } from '../app/store';

const Item = ({item, onPress, backgroundColor, textColor}:
ItemProps) => {
  const {selectedId} = useSelector((state: RootState) => state.tasksReducer)
  const renderSteps: ListRenderItem<StepData> = (step) => {
    return (
      <Step 
      text={step.item.text}
      id={step.item.id}
      step={step.item.step}
      />
    )
  }
  const clamp = (val: number, min: number, max: number): number => {
    return Math.min(Math.max(val,min),max)
  }
  // made a thresshold for for swipe detection using screen width
  const { width } = Dimensions.get('screen');
  const SWIPE_THESHOLD = 0.10 * width;
  // initialize animation values for position, opacity and scale of cards
  const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const isDragging = useRef(false)
  // creat animated pressable opacity
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback)
  //set on panResponder to record gestures
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: (e, gestureState) => true,
  //     onStartShouldSetPanResponderCapture: (e, gestureState) => true,
  //     onPanResponderMove: (e, gesture) => {
  //       animation.setValue({x: gesture.dx, y: gesture.dy})
  //     },
  //     onPanResponderRelease: (e, {dx, dy, vx, vy}) => {
  //       let velocity: undefined | number;
  //       if(vx > 0) {
  //         velocity = clamp(vx, 4, 5);
  //       } else if (vx < 0) {
  //         velocity = clamp(Math.abs(vx), 4,5) * -1;
  //       }
  //       if (Math.abs(dx) > SWIPE_THESHOLD) {
  //         // we will figure out what we want to do with deletes
  //         console.log('IM GONNA DELETE')
  //         Animated.spring(animation, {
  //           toValue: { x: 0, y: 0},
  //           friction: 7,
  //           useNativeDriver: true,
  //         })
  //       } else if (item.id !== selectedId) {
  //         Animated.spring(animation, {
  //           toValue: { x: 0, y: 0},
  //           friction: 3,
  //           useNativeDriver: true,
  //         })
  //       }
  //       else {
  //         Animated.spring(animation, {
  //           toValue: {x: 0, y: 0},
  //           friction: 4,
  //           useNativeDriver: true
  //         }).start();
  //       }
  //     },
     
  //   })
  // ).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        animation.setValue({ x: gesture.dx, y: 0 });
        isDragging.current = true;
      },
      onPanResponderRelease: (_, { dx }) => {
        isDragging.current = false;
        if (dx > SWIPE_THESHOLD) {
          console.log('DELETE')
          Animated.timing(animation, {
            toValue: { x: dx > 0 ? 100 : 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start();

        } else {
          Animated.spring(animation, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
  return (
    <Animated.View
    {...panResponder.panHandlers}
    style = {[styles.item, {backgroundColor,transform: [{translateX: animation.x}]}]}
    key={item.id}
    onStartShouldSetResponder={() => true}
    onResponderGrant={onPress}
    
     >
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      <FlatList 
      data={item.steps}
      renderItem={renderSteps}
      keyExtractor={item => item.id}
      style={item.id === selectedId ? {display : 'flex'} : {display: 'none'}}
      />
  </Animated.View>
)


}; 

export default Item;