import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined,
  Add: undefined,
  Settings: undefined,
}
export type TabStackParamList = {
  Home: undefined,
  Add: undefined,
  Settings: undefined,
}
export type HomeScreenPropsTab = NativeStackScreenProps<TabStackParamList, "Home">

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

export type AddTaskTab = NativeStackScreenProps<TabStackParamList, "Add">

export type TabType = NativeStackScreenProps<TabStackParamList,  keyof TabStackParamList, "Tabs">

export type AddTaskScreenProps  = NativeStackScreenProps<RootStackParamList, "Add">

export type SettingsScreenProps = NativeStackScreenProps<TabStackParamList, "Settings"> 

export type SettingsScreenPropsTab = NativeStackScreenProps<RootStackParamList, "Settings">

export type ItemData = {
  id: string;
  title: string;
  rating: number;
  category: string;
  steps: StepData[];
  ordered: boolean;
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
  step: number;
}

type RemoveStep = (step: StepData) => void;

export type StepProps = {
  step: StepData;
  deleteStep: () => void;
  onChangeText: (step: StepData) => void;
  stepNum: number;
  ordered: boolean;
}

export type Task = {
  id: string,
  title: string,
  rating: number,
  category: string,
  steps: StepData[]
  ordered: boolean;
}
export interface TasksState {
  tasks: Task[],
}