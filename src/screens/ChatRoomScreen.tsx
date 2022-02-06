import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  LogBox,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';



export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 90
  const [user, setUser] = useState("name's friend")

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: user,
      headerTitleStyle: { position: 'relative', bottom: Platform.OS === 'ios' ? 0 : 15, left: Platform.OS === 'ios' ? 0 : 30, textAlign: "center" },
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
          onPress={() => navigation.navigate('Home')} >
          <AntDesign name="left" size={24} color="#000" />
          <Text style={{ marginHorizontal: 5, fontSize: 15 }}>Home</Text>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable style={styles.containerpfp} onPress={() => { alert('friend profile') }}>
          {/* friend's pfp */}
        </Pressable>
      )
    })
  }, [])

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.page}>
        {/* list of messages - message components */}
        {/* input bar components */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerpfp: {
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 }
  },
  pfpImage: {
    backgroundColor: 'grey',
    marginBottom: Platform.OS === 'ios' ? -20 : 10,
    margin: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
  }
})