import { Alert, BackHandler, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseEffectHookExample = () => {
    const [counter, setCounter] = useState(0);
    const normalRef = useRef(0);
    useEffect(() => {
        normalRef.current=normalRef.current+10

    }, [counter]);

    return (
        <View style={[{ margin: 10 }]}>
            <Text style={[{ textAlign: 'center', fontSize: 25 }]}>UseEffectHookExample {normalRef.current}</Text>
            <Pressable onPress={() => setCounter(prev => prev + 1)} style={[{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }]}>
                <View style={[{ backgroundColor: 'lightblue' }, { width: 'auto', borderRadius: 5 }]}>
                    <Text style={[{ textAlign: 'center', padding: 10, fontSize: 20 }]}>
                        Counter: {counter}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default UseEffectHookExample

const styles = StyleSheet.create({})