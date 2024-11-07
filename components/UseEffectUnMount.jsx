import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UnmountChild from './UnmountChild';

const UseEffectUnMount = () => {
    const [showChild,setShowChild]=useState(true);
  return (
    <View style={[{margin:10}]}>
      <Text style={[{fontSize:25}]}>UseEffectUnMount</Text>
        <Button color={'red'} onPress={()=>setShowChild(prev=>!prev)} title={'Toggle Child'} />
        {showChild?<UnmountChild />:""}
    </View>
  )
}

export default UseEffectUnMount

const styles = StyleSheet.create({})