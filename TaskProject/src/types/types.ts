import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NativeSyntheticEvent, TextInputChangeEventData} from 'react-native'
export type RootStackParamList = {
  Home: undefined,
  Add: undefined,
  Settings: undefined,
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

export type AddTaskScreenProps = NativeStackScreenProps<RootStackParamList, "Add">

export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, "Settings">

export type ItemData = {
  id: string;
  title: string;
}

export type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

export type StepData = {
  id: string;
  text: string | undefined;
}


export type StepProps = {
  step: StepData;
  deleteStep: () => void,
  onChangeText: (step: StepData) => void
  stepNum: number;
  ordered: boolean;
}

export type Task = {
  id: string,
  title: string,
  rating: number,
  category: string,
  steps: string[]
}
export interface TasksState {
  tasks: Task[],
}