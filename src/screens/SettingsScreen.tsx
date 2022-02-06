import { AntDesign } from '@expo/vector-icons';
import React, {useLayoutEffect} from 'react';
import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

export default function SettingsScreen({navigation}) {

  useLayoutEffect (() => {
    navigation.setOptions({
        headerTitle: "",
        headerLeft: () => (
          <Pressable
            style={{
              flexDirection: 'row',
              position: 'relative',
              left: 20,
              bottom: Platform.OS === 'ios' ? 0 : 15,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => navigation.goBack()} >
            <AntDesign name="left" size={24} color="#000"/>
            <Text style = {{marginHorizontal: 5, fontSize: 15}}>Login</Text>
          </Pressable>
        )
      })
}, [])

    const logout = () => {
        alert("sign out")
     }

    return (
    
    <SafeAreaView style = {styles.page}>
        <Pressable onPress = {logout} style = {styles.logoutButton}>
            <Text> Sign Out </Text>
        </Pressable>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})