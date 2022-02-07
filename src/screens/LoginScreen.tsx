import { useWalletConnect } from '@walletconnect/react-native-dapp';
import React, { useContext, useEffect, useState } from 'react'
import {Image,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        Pressable,
        StyleSheet,
        Text,
        TouchableWithoutFeedback,
        View} from 'react-native'

// import AuthContext from "../contexts/Authentication";


const LoginScreen = ({navigation}) => {
    const connector = useWalletConnect();
    const [account, setAccount] = useState("");
    // const url_HomeScreen = "dgit://app/HomeScreen"

    const connectWallet = React.useCallback(() => {
        return connector.connect();
    }, [connector]);
    
    useEffect(() => {
        if (connector?.accounts?.length > 0) {
          setAccount(connector.accounts[0])
          console.log('Log-In')
          console.log(account)
          navigation.navigate('Home')
        }
    }, [connector]);
    
    // const killSession = React.useCallback(() => {
    //     setAccount("")
    //     return connector.killSession();
    // }, [connector]);
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.page}>
                <View style={styles.ImageContainer}>
                    <Image source={require('../assets/icons/dGitIconGreen.png')} style={styles.icon} />
                </View>
                <View style={styles.ButtonContainer}>
                <Pressable style={styles.button} onPress={connectWallet}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}> Connect Wallet </Text>
                </Pressable>
                </View>  
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    ImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 190,
        height: 190,
    },
    inputContainer: {
        width: "100%",
        padding: 15,
        margin: 5
    },
    ButtonContainer: {
        width: "100%",
        padding: 15,
        margin: 5
    },
    button: {
        margin: 4,
        padding: 10,
        minHeight: 50,
        minWidth: 200,
        borderRadius: 100,
        backgroundColor: '#39F44A',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
