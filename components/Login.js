import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Button } from 'react-native';
// In a React Native application
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/app";
import Fire from '../Fire'
export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const doUserLogin = async function () {
        alert(await Fire.shared.ref);
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (userInfo) => {
                // Signed in
                var user = userInfo.user.email;
                alert(user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    return (
        <View style={{ width: '60%' }}>
            <TextInput
                style={styles.input}
                value={email}
                placeholder={"Электронная почта"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder={"Пароль"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title={"Войти"} style={{ color: 'red' }} onPress={() => doUserLogin()} />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderRadius: 20,
        padding: 2,
        paddingLeft: 15,
        height: 40,
        marginBottom: 10,
        backgroundColor: "#fff"
    }
});
//This funciton will save a simple Person object