import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Get_api = () => {
    const [dummy, setDummy] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // fetch("http://192.168.50.165:3000/users")
        //     .then((respone) => respone.json())
        //     .then((data) =>setUsers(data))
        //     .catch((err) => { console.log("error") })
        axios.get('http://192.168.50.165:3000/users').then((result)=>{
            console.log(result.data);
        })
        
    }, [dummy]);
    return (
        <View>
            <Text style={[{ fontSize: 25 }]}>Get _api</Text>
            {users.map((user,id)=>(
                <>
                <View>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                </View>
                </>
            ))}
            <Button onPress={() => setDummy(!dummy)} title='ok' />
        </View>
    )
}

export default Get_api

const styles = StyleSheet.create({})