import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { ContextProvider } from './src/context/ContextProvider'; // Import your ContextProvider
import * as Font from 'expo-font';

async function loadCustomFont() {
  await Font.loadAsync({
    'DevFest': require('./assets/font/ProductSans-Medium.ttf'), // Path to your font file
  });
}

export default function App() {

  useEffect(() => {
    loadCustomFont();
  }, []);

  return (
    <ContextProvider>
      <RootNavigator />
    </ContextProvider>
  );
}
