import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import UseEffectHookExample from './components/UseEffectHookExample';
import UseEffectForUpdatingFase from './components/UseEffectForUpdatingFase';
import UseEffectUnMount from './components/UseEffectUnMount';
import HideToggle from './components/HideToggle';
import StyeleButton from './components/StyeleButton';
import Loader from './components/Loader';
import PressableComponent from './components/PressableComponent';
import StatusBarComp from './components/StatusBarComp';
import RefUse from './components/RefUse';
import ModelBox from './components/ModelBox';
import Get_api from './components/Get_api';

const App = () => {
  const isDarkMode=useColorScheme()=='dark';
  return (
    <View style={[{backgroundColor:'white'},{flex:1}]}>
      <SafeAreaView style={[]}>
        <ScrollView showsVerticalScrollIndicator={false}>
     
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={ isDarkMode ?'black':'pink'}
          animated={true}
          hidden={false}
          // showHideTransition={'slide'}
          translucent={false}
        />
      
        {/* <UseEffectHookExample/> */}
        {/* <UseEffectForUpdatingFase /> */}
        {/* <UseEffectUnMount /> */}
        {/* <HideToggle /> */}
        {/* <StyeleButton /> */}
        {/* <Loader /> */}
        {/* <PressableComponent /> */}
        
        {/* <StatusBarComp /> */}
        {/* <RefUse /> */}
        {/* <ModelBox /> */}
        <Get_api />
             
        </ScrollView>
      </SafeAreaView>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})