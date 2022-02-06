import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Pressable, Text, View } from 'react-native';

import styles from './styles';

export default function AddChat({user}) {
  const navigation = useNavigation();

  const onPress = () => {
    // navigate to the existing channel or create a new one 
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.ImageURI }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}> {user.preferredName} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.status}> {user.status} </Text>
        </View>
      </View>
    </Pressable>
  );
}

