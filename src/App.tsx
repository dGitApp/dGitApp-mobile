import {
  withWalletConnect
} from "@walletconnect/react-native-dapp";
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// import AuthContext from "./contexts/Authentication";



export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();
  const [userId, setUserId] = useState("");
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style = {"dark"}/>
      </SafeAreaProvider>
    );
  }
}
