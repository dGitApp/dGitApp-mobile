import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import { ActivityIndicator, Image, Pressable, Text, View} from 'react-native';

import styles from './styles';


export default function ChatRoomItem ({chatRoom}) {

    const navigation = useNavigation();
     
    const onPress = () => {
      alert('navigate the relative channel')
      // navigation.navigate('ChatRoom', { id: chatRoom.id });
    }
  
    return (
      <Pressable onPress = {onPress} style = {styles.container}>
        {/* <Image source = {{uri: user.imageUri}} style = {styles.image} /> */}

        {!!chatRoom.newMessages && <View style = {styles.badgeContainer}> 
          <Text style = {styles.badgeText}> {chatRoom.newMessages} </Text>
        </View>
        }
        
        <View style = {styles.rightContainer}>
          <View style = {styles.row}>
            <Text style = {styles.name}> friend's name </Text>
            <Text style = {styles.text}> date last message </Text>
          </View>
          <Text numberOfLines = {1} style = {styles.text}> last message </Text>
        </View>
      </Pressable>
    );
}

