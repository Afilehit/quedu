import React, { Component, useState } from 'react';
import { Image, StyleSheet, TextInput, SafeAreaView, Button, View } from 'react-native';
import * as ImagePicker from "expo-image-picker";
// In a React Native application
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/BottomTabNavigator';
import TopBar from '../components/TopBar';
import firebase from "firebase";
import Fire from '../Fire';



//Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('pRm9S8rdMmYsWYiH4H6QTtW21o3jGBRItdz2O5vS', 'acJS88QVdPzmo5lgo7mSgo74UWO81ShgeQfqLSnM');
// Parse.serverURL = 'https://parseapi.back4app.com/';

//const [userEmail, setEmail] = useState(null);


export default function EditProfile ({ navigation }) {
    const [userVuz, setUserVuz] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userCourse, setUserCourse] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState('../components/icons/default.png');
    const [userObj, setUserObj] = useState({});
    
    async function updateData(){
        alert('updated!')
        firebase.database().ref('users/' + userObj.uid).update({
            firstname: userFirstName,
            lastname:userLastName,
            course: userCourse,
            vuz: userVuz,
            description: userDescription
        })
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // setUserEmail(user.email);
            // setUserName(user.displayName);
            if(userPhotoUrl == '../components/icons/default.png'){
                setUserPhotoUrl(user.photoURL);
            }
            
            setUserObj(user);
            //setEmail(user.email)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //this.setState({emailUser: user.email})
          // ...
        } else {
            navigation.navigate("ChooseRole")
          // User is signed out
          // ...
        }
    });
    
    const pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
        });
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        firebase.database().ref('users/' + userObj.uid).update({
            userPhotoUrl: uploadUrl
        })
        //alert(uploadUrl);
        userObj.updateProfile({
            photoURL: uploadUrl
        })
        //alert('this works')
        setUserPhotoUrl(uploadUrl)
        // alert(uploadUrl)
        // alert(userPhotoUrl)
    }
    async function uploadImageAsync(uri) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
      
        const ref = firebase.storage().ref('userPhoto/' + userObj.uid + '/avatar');
        const snapshot = await ref.put(blob);
      
        // We're done with the blob, close and release it
        blob.close();
        //alert(await snapshot.ref.getDownloadURL());
        return await snapshot.ref.getDownloadURL();
    }
    const styles = StyleSheet.create({
        input: {
            width: '90%',
            borderRadius: 20,
            padding: 2,
            paddingLeft: 15,
            height: 40,
            marginBottom: 10,
            backgroundColor: "#fff"
        }
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBar navName="Профиль" navigation={navigation} backNav="Profile" />
            <View style={{width: '100%'}}>
            <Image style={{width: 200, height: 200, borderRadius: 100, borderWidth: 10, borderColor: 'lightgray'}} source={{uri: userPhotoUrl}}/>
            <Button
                onPress={pickImage}
                title="Выбрать изображение"
            />
            </View>
            <View style={{width: '100%', alignItems: 'center', }}>
            <TextInput
                style={styles.input}
                value={userFirstName}
                placeholder={"Имя"}
                onChangeText={(text) => setUserFirstName(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={userLastName}
                placeholder={"Фамилия"}
                onChangeText={(text) => setUserLastName(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={userVuz}
                placeholder={"Укажите ВУЗ"}
                onChangeText={(text) => setUserVuz(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={userCourse}
                placeholder={"Укажите курс"}
                onChangeText={(text) => setUserCourse(text)}
                autoCapitalize={"words"}
            />
            <TextInput
                style={styles.input}
                value={userDescription}
                placeholder={"Описание"}
                onChangeText={(text) => setUserDescription(text)}
                multiline
            />
            </View>
            <Button title="Принять" color='green' onPress={() => updateData() } />
            <Button title="Выйти" color='red' onPress={() => { firebase.auth().signOut() }} />
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