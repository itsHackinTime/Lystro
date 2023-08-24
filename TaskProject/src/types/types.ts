import { NativeStackScreenProps } from '@react-navigation/native-stack'

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

export type StepProps = {
  id: string;
  onStepChange: () => void;
  step: number;
  stepState: string[]
}