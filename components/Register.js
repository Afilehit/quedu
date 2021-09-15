import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
// In a React Native application
//import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import firebase from "firebase/app";
import Fire from '../Fire';

const options = [
    { key: 'student', text: 'Ученик' },
    { key: 'teacher', text: 'Учитель' }
  ];
  
export const Register = ({navigation,route}) => {
    const [selectedRole, setSelectedRole] = useState('Ученик');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const doUserRegistration = async function () {
        alert('Подождите пока идёт регистрация...');
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userInfo) => {
                alert(`Пользователь успешно зарегистрирован! ${userInfo.user.email}`);
                userInfo.user.updateProfile({
                    displayName: username
                }).then(() => {
                    firebase.database().ref('users/' + userInfo.user.uid).set({
                        username: username,
                        email: email,
                        firstname: firstname,
                        lastname: lastname,
                        userPhotoUrl: '../components/icons/default.png',
                        role: route.params.Role,
                        uid: userInfo.user.uid
                    }).then(() => {
                        navigation.navigate("Profile")
                    });
                    
                });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                alert(error);
            });
    }
    return (
        <SafeAreaView style={{ width: '60%' }}>
            <TextInput
                style={styles.input}
                value={email}
                placeholder={"Электронная почта"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={username}
                placeholder={"Псевдоним"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={firstname}
                placeholder={"Имя"}
                onChangeText={(text) => setFirstname(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={lastname}
                placeholder={"Фамилия"}
                onChangeText={(text) => setLastName(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder={"Пароль"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                autoCapitalize={"none"}
            />
            {/* <Picker style={{marginVertical: 10}} selectedValue={selectedRole} onValueChange={(itemVal) => {
                setSelectedRole(itemVal);
            }}>
                {roles.map((r) => (
                    <Picker.Item label={r} value={r} />
                ))}
            </Picker> */}
            <Button title={"Зарегистрироваться"} style={{ color: 'red' }} onPress={() => doUserRegistration()} />
        </SafeAreaView>
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