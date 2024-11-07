import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const UnmountChild = () => {
    useEffect(()=>{
        // console.log("child Cmpo hai");
        return()=>{
            console.log('child Unmounted')
        }
    },[])
  return (
    <View style={[{margin:25}]}>
      <Text style={[{fontSize:25}]}>UnmountChild</Text>
    </View>
  )
}

export default UnmountChild

const styles = StyleSheet.create({})