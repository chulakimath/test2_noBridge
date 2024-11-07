import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ModelBox = () => {
    const [showModel, setShowModel] = useState(false);
    return (
        <View style={[]}>
            <TouchableOpacity onPress={() => setShowModel(true)} style={[styles.opnBtn]}>
                <Text style={[styles.btnTxt,]}>Click me</Text>
            </TouchableOpacity>

            <Modal
                visible={showModel}
                animationType='fade'
                transparent={false}
                onRequestClose={()=>setShowModel(false)}
                
            >

                <ScrollView showsVerticalScrollIndicator={false} style={[{ flex: 1 }]}>
                    <View style={[styles.overLay]}>
                        <View style={[styles.modelBody]}>
                            <Text style={[styles.modelTitle]}>model example</Text>
                            <Text style={[styles.modelDesc]}>description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla eius, est minima doloribus voluptatibus consequatur vero aut eos officia velit porro quos iure odio praesentium totam, a dignissimos? Magni.</Text>
                            <TouchableOpacity style={[{ alignItems: "center" }]} onPress={() => setShowModel(false)}>
                                <Text style={[styles.closeBtn]}>
                                    close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>

        </View>
    )
}

export default ModelBox

const styles = StyleSheet.create({
    opnBtn: {
        backgroundColor: 'lightblue',
        margin: 20,
        paddingVertical: 10,
    },
    btnTxt: {
        textAlign: 'center'
    },
    overLay: {
        // backgroundColor: 'rgba(0,0,0,0.3)',

    },
    modelTitle: {
        color: 'lightblue',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 5,
    },
    modelDesc: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
        textAlign: 'justify'
    },
    closeBtn: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        width: 100,
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    modelBody: {
        backgroundColor: 'rgba(124,123,123,1)',
        marginVertical: 50,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 10,
    }
})