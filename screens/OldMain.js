// import React, { Component, useState } from 'react';
// import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
// // In a React Native application
// import { BottomTabBar } from '@react-navigation/bottom-tabs';
// import BottomTabNavigator from '../components/BottomTabNavigator'
// import firebase from "firebase/app";
// import Fire from '../Fire'



// //Initializing the SDK. 
// // Parse.setAsyncStorage(AsyncStorage);
// // //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// // Parse.initialize('pRm9S8rdMmYsWYiH4H6QTtW21o3jGBRItdz2O5vS', 'acJS88QVdPzmo5lgo7mSgo74UWO81ShgeQfqLSnM');
// // Parse.serverURL = 'https://parseapi.back4app.com/';

// //const [userEmail, setEmail] = useState(null);
// let userEmail = "";
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         userEmail = user.email;
//         //setEmail(user.email)
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       //this.setState({emailUser: user.email})
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
// });

// class Main extends Component {
//     state={
//         email: '',
//     };
//     render() {
//         let { navigation } = this.props;
//         console.log(this.props);
//         return (
//             <SafeAreaView style={{ flex: 1 }}>
//                 <Text>{this.state.email}</Text>
//                 <Button title="Зарегистрироваться" onPress={() => { navigation.navigate('SignUp') }} />
//                 <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
//             </SafeAreaView>
//         );
//     }
// }
// export default Main;
// // export default function Main({ navigation }) {
// //     const loadscene = () => {
// //         navigation.navigate('SignUp');
// //     }
// //     return (
// //         <SafeAreaView>
// //             <Button title="Зарегистрироваться" onPress={loadscene} />
// //             <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
// //         </SafeAreaView>
// //     );
// // };