import { DataStore } from '@aws-amplify/datastore';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify';
import React, {useState} from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View} from "react-native";

import { ChatRoom, Message } from '../../src/models';

import styles from './styles'




const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        // send message
        const user = await Auth.currentAuthenticatedUser();
        const newMessage = await DataStore.save(new Message({
          content: message,
          userID: user.attributes.sub,
          chatroomID: chatRoom.id,
        }))
    
        updateLastMessage(newMessage);
    
        setMessage('');
    }

    const updateLastMessage = async (newMessage) => {
        DataStore.save(ChatRoom.copyOf(chatRoom, updatedChatRoom => {
          updatedChatRoom.LastMessage = newMessage;
        }))
    }

    const onPlusClicked = () => {
        console.warn("On plus clicked");
    }
    
    const onPress = () => {
        if (message) {
          sendMessage();
        } else {
          onPlusClicked();
        }
    }


    return (
        <KeyboardAvoidingView  
            style = {styles.root} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            >
            <View style = {styles.inputContainer}>
                <SimpleLineIcons name = "emotsmile" size = {24} color = "#595959" style = {styles.icon} />
                
                <TextInput style = {styles.input} 
                    placeholder = "dGit message..."
                    value = {message}
                    onChangeText = {setMessage}
                />

                <Feather name = "camera" size = {24} color = "#595959" style = {styles.icon} />
                <MaterialCommunityIcons name = "microphone-outline" size = {24} color = "#595959" style = {styles.icon} />
            </View>
            <Pressable onPress = {onPress} style = {styles.buttonContainer}>
                {message ? <Ionicons name = "send" size = {18} color = 'white' /> : <AntDesign name = "plus" size = {18} color = "white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default MessageInput;