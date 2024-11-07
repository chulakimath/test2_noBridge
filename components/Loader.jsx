import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loding, setLoading] = useState(false)
    return (
        <View >
            {loding ? <View style={[{elevation:1,margin:50,shadowColor:'black',shadowOffset:{width:10,height:10},shadowOpacity:5,height:'auto',width:'auto',padding:25}]}>
                <Text style={[{ justifyContent: 'center', fontSize: 25, gap: 10 }, { textAlign: 'center' }]}>
                    Fetching...
                    <ActivityIndicator size='small' color={'pink'} />
                </Text>
            </View> : ''}
            <View style={[{ margin: 25 }]}>
                <Button color={'red'} onPress={() => setLoading(prev => !prev)} title='Get Data' />
            </View>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})