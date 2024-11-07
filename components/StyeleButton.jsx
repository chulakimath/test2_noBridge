import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const StyeleButton = () => {
    return (
        <View>
            <Text>StyeleButton</Text>
            <Button title={'click me'} />
            <TouchableOpacity activeOpacity={0.8}  style={[{backgroundColor:'lightblue',borderRadius:10,elevation:5,margin:25}]}>
                <View style={[{paddingVertical:8}]}>
                    <Text style={[{textAlign:'center',fontSize:16,color:'white'}]}>Touchable Opacaity</Text>
                </View>
            </TouchableOpacity>

            <TouchableHighlight underlayColor={'pink'} onPress={()=>{}} activeOpacity={1}   style={[{backgroundColor:'red',margin:25,borderRadius:4,elevation:5}]}>
                <View style={[{paddingVertical:8}]}>
                    <Text style={[{textAlign:'center',fontSize:16,color:'white'}]}>Touchable Highlight</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default StyeleButton

const styles = StyleSheet.create({})