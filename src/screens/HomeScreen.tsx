import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { 
  Animated, 
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
 } from 'react-native';


export default function HomeScreen({route, navigation}) {
  // const { userId } = React.useContext(AuthContext);

  useLayoutEffect(() => {

    navigation.setOptions({
      headerTitle: "",
      headerRight: () => (
        <View style={{ position: 'relative', right: 20, bottom: Platform.OS === 'ios' ? 0 : 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Pressable onPress={() => (alert('search'))}>
            < MaterialIcons name="search" size={24} color="black" style={{ marginHorizontal: 10 }} />
          </Pressable>
          < Pressable onPress={() => navigation.navigate('AddChat')}>
            <AntDesign name="plus" size={24} color="black" />
          </Pressable>
        </View>
      ),
      headerLeft: () => (
        <Pressable style={styles.containerpfp} onPress={() => { navigation.navigate('Settings') }}>
          <View style = {styles.pfpImage} />
        </Pressable>
    )
    })
  }, [])
  
  const onChannelPressed = (channel) => {
    navigation.navigate("ChatRoom", { channelId: channel.id });
  }

  return (
    <SafeAreaView style = {styles.page}>
      <View></View>
      <View style = {styles.dgitbuttoncontainer}>
        <Pressable style = {styles.dgitButton} onPress = {() => navigation.navigate("WalletProfile")}>
          <Image source = {require('../assets/icons/dGitIconGreen.png')} style = {styles.icon}/>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  dgitbuttoncontainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  dgitButton: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5}
  },
  icon: {
    width: 60,
    height: 60,
  },
  containerpfp: {
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 5}
  },
  pfpImage: {
    marginBottom: Platform.OS === 'ios' ? -20 : 10,
    margin: 20, 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    borderColor: 'black', 
    borderWidth: 2,
    backgroundColor: 'grey'
 }
});