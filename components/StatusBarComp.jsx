import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarComp = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'rgba(255,52,158,0.5)'}
        hidden={false}
        networkActivityIndicatorVisible={false}
        translucent={true}
      />
      <View style={[{padding:10,}]}><Text style={[{textAlign:'center',color:'brown'}]}>Connecting ....</Text></View>
    </>
  )
}

export default StatusBarComp

const styles = StyleSheet.create({})