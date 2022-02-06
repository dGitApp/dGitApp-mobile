import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useState} from 'react'
// import usersData from '../assets/dummy-data/Users';

import { 
  FlatList, 
  Platform, 
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
 } from 'react-native';

import AddChat from '../components/AddChat';


export default function AddChatScreen() {
  const navigation = useNavigation();

  useLayoutEffect (() => {
    navigation.setOptions({
        headerTitle: "New dChat",
        headerTitleStyle: {position: 'relative', bottom: Platform.OS === 'ios' ? 0 : 15, left: Platform.OS === 'ios' ? 0 : 60, textAlign:"center"},
        headerLeft: () => (
          <Pressable
            style={{
              flexDirection: 'row',
              position: 'relative',
              left: 10,
              bottom: Platform.OS === 'ios' ? 0 : 15,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => navigation.goBack()} >
            <AntDesign name="left" size={24} color="#000"/>
            <Text style = {{marginHorizontal: 5, fontSize: 15}}>Home</Text>
          </Pressable>
        )
    })
  }, [])

  return (
    <SafeAreaView style = {styles.page}>
      {/* Flatlist with friends address */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
});