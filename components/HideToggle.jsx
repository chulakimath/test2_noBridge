import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'

const HideToggle = () => {
    const [mode, setMode] = useState(false);
    const background = mode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }
    const colors = mode ? { color: 'white' } : { color: 'black' }
    return (
        <>
            <View style={[{ flex: 1 }, { margin: 10 }, background]}>
                <Text style={[{ fontSize: 30, textAlign: "center" }, colors]}>Hide Show Toggle</Text>

            </View>

            <Pressable onPress={() => setMode(prev => !prev)} style={[{ alignItems: 'center', marginTop: 25 }]}>
                <View style={[{ backgroundColor: 'lightblue', justifyContent: 'center', borderRadius: 5 }]}>
                    <Text style={[{ textAlign: 'center', fontSize: 20, paddingHorizontal: 10, paddingVertical: 5 }]}>{mode?"dark":'light'}</Text>
                </View>
            </Pressable>
        </>
    )
}

export default HideToggle

const styles = StyleSheet.create({})