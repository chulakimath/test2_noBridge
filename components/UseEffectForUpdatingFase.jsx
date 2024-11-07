import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseEffectForUpdatingFase = () => {
    const [score, setScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const tempNum = useRef(0);
    const tempSkip = useRef(0);
    useEffect(() => {
        tempNum.current++;
        console.log(tempNum.current);

    },)

    return (
        <View>
            <Text style={[{ marginLeft: 10, marginTop: 10 }]}>
                Temp : {tempNum.current}
            </Text>
            <Text style={[{ marginLeft: 10, marginTop: 10 }]}>
                Score : {score}
            </Text>
            <Text style={[{ marginTop: 10, marginLeft: 10 }]}>
                Counter : {counter}
            </Text>
            <ChildComp counts={counter} />
            <View style={[{ padding: 10, marginTop: 10, flexDirection: 'column', gap: 10 }]}>
                <Button onPress={() => setScore(prev => prev + 1)} title={'Update Score'} />
                <Button style={[{ backgroundColor: 'red' }]} onPress={() => setCounter(prev => prev + 1)} title={'Update Counter'} />
            </View>
        </View>
    )
}

const ChildComp=({counts})=>{
    useEffect(()=>{
        Alert.alert("hello",`thi is hello ${counts}`);
    },[counts])
    return (<>
    <View style={[{marginLeft:10,marginTop:10}]}>
        <Text>
      Counts:  {counts}
        </Text>
    </View>
    </>)
}

export default UseEffectForUpdatingFase

const styles = StyleSheet.create({

})