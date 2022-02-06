import { AntDesign } from '@expo/vector-icons';
import React, {useEffect, useLayoutEffect} from 'react';
import {Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function WalletProfileScreen({navigation}): JSX.Element {
    
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
            <Text style = {{marginHorizontal: 5, fontSize: 15}}>Home</Text>
          </Pressable>
        )
      })
}, [])

  return (
    
    <SafeAreaView style = {styles.page}>
        <View style={styles.containerHeader}>
            <Pressable  onPress={() => {alert('change profile pic')}}>
                <View style = {styles.pfpImage} />
            </Pressable>
            <View style = {styles.stats}>
                <Text> Account name (public address) </Text>
                <Text> Account stats: total balance ETH</Text>
                <Text> Total Value in NFTs</Text> 
            </View>
        </View>
        {/* flat list grid */}
        <View style={styles.containerGallery}>
            <View style = {styles.nftPlaceHolder}>
                <Text> NFT #1 </Text>
            </View>
            <View style = {styles.nftPlaceHolder}>
                <Text> NFT #2 </Text>
            </View>
            <View style = {styles.nftPlaceHolder}>
                <Text> NFT #3 </Text>
            </View>
        </View>
        <Text style = {{textAlign: 'center'}}> --------------------------------------------- </Text>
        {/* transaction stats - flat list*/}
        <View style={styles.containerTransaction}>
            <Text> NFT transaction </Text>
        </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    containerHeader: {
        flexDirection: 'row',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 5},
      },
      containerGallery: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
        height: 300,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 5},
      },
      nftPlaceHolder: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2, 
        borderColor: 'black', 
        width: 100, 
        height: 100
      },
      containerTransaction: {
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 5},
      },
      pfpImage: {
        justifyContent: 'center',
        margin: 10, 
        width: 90, 
        height: 90, 
        borderRadius: 45, 
        borderColor: 'black', 
        borderWidth: 2,
        backgroundColor: 'grey'
     },
     stats: {
         margin: 10
     }
})

