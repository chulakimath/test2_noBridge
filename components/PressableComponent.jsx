import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressableComponent = () => {
    return (
        <View style={[{ padding: 10, flex: 1, justifyContent: 'center' }]}>
            <Text style={[{ fontSize: 25 }]}>PressableComponent</Text>
            <View style={[{ margin: 25, paddingHorizontal: 25 }]}>
                <Pressable
                    // onPress={() => { console.log("pressded on") }}
                    onPressIn={() => { console.log("in") }}
                    onPressOut={() => { console.log('press out') }}
                    onLongPress={() => { console.log("long") }}
                    delayLongPress={5000} //for long press delay
                    style={[{ backgroundColor: 'red', borderRadius: 5 }]}>
                    <View style={[{ paddingVertical: 10 }]}>
                        <Text style={[{ textAlign: 'center', fontSize: 20, color: 'white' }]}>
                            Pressable
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default PressableComponent

const styles = StyleSheet.create({})