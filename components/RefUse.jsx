import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Parent from './Parent'
import Child from './Child'

const RefUse = () => {
const ck=()=>{
    console.log("handled")
}
  return (
    <View>
      <Text>RefUse</Text>
      <Button onPress={ck} title='click' />
      <Parent>
        <Child/>
        <Child/>
        <Child/>
        <Child/>
      </Parent>
    </View>
  )
}

export default RefUse

const styles = StyleSheet.create({})