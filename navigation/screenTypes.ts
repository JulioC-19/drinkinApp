import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: {};
  Signup: {};
  Home: {};
  Profile: {};
  Search: {};
  Result: {};
  Drink: {};
};

export type navigationProps = NativeStackScreenProps<RootStackParamList>;
