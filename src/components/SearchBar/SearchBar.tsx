import React from "react";
import { StyleSheet, TextInput, View} from "react-native";


export default function SearchBar() {
    return (
            <View style = {styles.inputContainer}>
                <TextInput style = {styles.input} 
                    placeholder = "search..."
                />
            </View>
    )
}

const styles = StyleSheet.create( {
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 1,
    },

    input: {
        flex: 1,
        marginHorizontal: 10,
    },
})