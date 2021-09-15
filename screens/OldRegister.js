// import React, { useState } from 'react';
// import { Alert, StyleSheet, TextInput, View, Button } from 'react-native';
// // In a React Native application
// import Parse from "parse/react-native.js";
// import AsyncStorage from '@react-native-async-storage/async-storage';


// //Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('pRm9S8rdMmYsWYiH4H6QTtW21o3jGBRItdz2O5vS', 'acJS88QVdPzmo5lgo7mSgo74UWO81ShgeQfqLSnM');
// Parse.serverURL = 'https://parseapi.back4app.com/';


// export const Register = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");

//     const doUserRegistration = async function () {
//         if (username.length > 3 && password.length > 5) {
//             // Note that these values come from state variables that we've declared before
//             const usernameValue = username;
//             const passwordValue = password;
//             const emailValue = email;
//             console.log(usernameValue, passwordValue, emailValue)
//             // Since the signUp method returns a Promise, we need to call it using await
//             return await Parse.User.signUp(usernameValue, passwordValue, {
//                 useremail: emailValue,
//             })
//                 .then(async (createdUser) => {
//                     // Parse.User.signUp returns the already created ParseUser object if successful
//                     Alert.alert(
//                         "Success!",
//                         `User ${createdUser.get("username")} was successfully created!`
//                     );
//                     await Parse.User.logOut();
//                     return true;
//                 })
//                 .catch((error) => {
//                     // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//                     Alert.alert("Error!", error.message);
//                     return false;
//                 });
//         } else {
//             Alert.alert(
//                 "Ошибка!",
//                 `Введено слишком мало символов для пароля или логина`
//             );
//             console.log("Error! There are not enough symbols in login or password")
//         }
//     };

//     return (
//         <View style={{ width: '60%' }}>
//             <TextInput
//                 style={styles.input}
//                 value={email}
//                 placeholder={"Электронная почта"}
//                 onChangeText={(text) => setEmail(text)}
//                 autoCapitalize={"none"}
//             />
//             <TextInput
//                 style={styles.input}
//                 value={username}
//                 placeholder={"Псевдоним"}
//                 onChangeText={(text) => setUsername(text)}
//                 autoCapitalize={"none"}
//             />
//             <TextInput
//                 style={styles.input}
//                 value={password}
//                 placeholder={"Пароль"}
//                 secureTextEntry
//                 onChangeText={(text) => setPassword(text)}
//             />
//             <Button title={"Зарегистрироваться"} style={{ display: 'none' }} onPress={() => doUserRegistration()} />
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     input: {
//         width: '100%',
//         borderRadius: 20,
//         padding: 15,
//         height: 40,
//         marginBottom: 10,
//         backgroundColor: "#fff"
//     }
// });
// //This funciton will save a simple Person object