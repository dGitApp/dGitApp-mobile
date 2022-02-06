/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     type RootParamList = RootStackParamList & {};
   }
 }
 
 export type RootStackParamList = {
   readonly Root: NavigatorScreenParams<RootTabParamList> | undefined;
   readonly Modal: undefined;
   readonly Login: undefined;
   readonly Verification: undefined;
   readonly Register: undefined;
   readonly Home: undefined;
   readonly Settings: undefined;
   readonly AddChat: undefined;
   readonly ChatRoom: undefined;
   readonly NotFound: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
 };
 
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<RootStackParamList>
 >;