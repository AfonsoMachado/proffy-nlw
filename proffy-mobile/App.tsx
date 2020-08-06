import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing'

// tela de carregamento
import { AppLoading } from 'expo'

// Importando fontes
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

export default function App() {

  // Fontes utilizadas na aplicação
  // useFonts é trocada para true quando as fontes são carregadas
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="auto" />
      </>

    );

  }

}

