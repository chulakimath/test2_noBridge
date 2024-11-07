import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Parent = ({children}) => {
  return (
    <View>
        <Text>This is Parent</Text>
      {children}
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})