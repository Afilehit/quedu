import React, { Component, useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
// In a React Native application
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/BottomTabNavigator'
import firebase from "firebase/app";
import Fire from '../Fire';
import TopBar from '../components/TopBar';
import { Card, SendQuery } from '../components/styles';


//Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('pRm9S8rdMmYsWYiH4H6QTtW21o3jGBRItdz2O5vS', 'acJS88QVdPzmo5lgo7mSgo74UWO81ShgeQfqLSnM');
// Parse.serverURL = 'https://parseapi.back4app.com/';

//const [userEmail, setEmail] = useState(null);


export default function Profile ({ navigation }) {
    const [userObj, setUserObj] = useState({});
    const [userName, setUserName] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState('../components/icons/default.png');
    const [userDescription, setUserDescription] = useState('');
    const [userCourse, setUserCourse] = useState('');
    const [userVuz, setUserVuz] = useState('');

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUserPhotoUrl(user.photoURL)
            setUserObj(user)
            //setEmail(user.email)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //this.setState({emailUser: user.email})
          // ...
        } else {
            setUserName('null');
          // User is signed out
          // ...
        }
    });
    firebase.database().ref("users/" + userObj.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
            setUserName(snapshot.val().firstname + ' ' + snapshot.val().lastname);
            setUserVuz(snapshot.val().vuz)
        }
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBar navName="Профиль" />
            <View style={{alignItems:'center', justifyContent: 'center', marginBottom: 10}}>
                <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: 200, height: 200, borderRadius: 100, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 5 }} source={{uri: userPhotoUrl}} />
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    {userName}
                </Text>
                <Text>
                    Учится: {userVuz}
                </Text>
                </Card>
            </View>
            <View style={{width: '100%', alignItems:'center', justifyContent: 'center'}}>
            <SendQuery color='black' style={{borderColor: '#2B7AF3'}} onPress={() => { navigation.navigate('EditProfile') }}>
                <Text style={{fontSize: 20, color: '#2B7AF3', fontWeight: 'bold'}}>Редактировать</Text>
            </SendQuery>
            <SendQuery color='red' style={{borderColor: '#FF0000'}} onPress={() => { firebase.auth().signOut() }}>
                <Text style={{fontSize: 20, color: '#FF0000', fontWeight: 'bold'}}>Выйти</Text>
            </SendQuery>
            </View>
            <BottomTabNavigator background="#FFF" colorIcon="#868686" profileColorIcon="#2B7AF3" navigation={navigation} />
        </SafeAreaView>
    );
}
// export default function Main({ navigation }) {
//     const loadscene = () => {
//         navigation.navigate('SignUp');
//     }
//     return (
//         <SafeAreaView>
//             <Button title="Зарегистрироваться" onPress={loadscene} />
//             <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
//         </SafeAreaView>
//     );
// };