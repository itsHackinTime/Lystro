import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined,
  Details: undefined,
  Settings: undefined,
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">

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