import React from "react";
import { Text, View} from 'react-native';

import styles from "./styles";

export default function CurrentBalanceHeader() {
    return (
        <View style = {styles.root}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ textAlign: 'center' }}> Current Balance component </Text>
            </View>
        </View>
    );
}



