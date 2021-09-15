import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button, View, Image, TouchableOpacity } from 'react-native';
import { Card, NameTitle, EduTitle, DescTitle, SendQuery } from './styles';
import TopBar from "./TopBar"
// import {
//   NativeBaseProvider,
//   Container,
//   Content,
//   Header,
//   Body,
//   Title,
//   ListItem,
//   Text,
//   Icon,
//   Item,
//   Input,
//   Left,
//   Right,
//   Button,
// } from 'native-base';
import Fire from '../Fire';
import firebase from "firebase/app";
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigator';

export const Teacher = ({navigation, route}) => {
  const [Id, setId] = useState();
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [users, setUsers] = useState([]);

  function sendQuery(){
    const user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid + '/leaders/').push({
      firstname: route.params.user.firstname,
      lastname: route.params.user.lastname,
      userPhotoUrl: route.params.user.userPhotoUrl,
      uid: route.params.user.uid
    })
    alert("Вы успешно купили курс!")
    navigation.navigate('Chats');
  }
//   useEffect(() => {
//     const userRef = firebase.database().ref('/users').orderByChild('role').equalTo('Ведущий').limitToFirst(5);
//     const OnLoadingListener = userRef.once('value').then( (snapshot) => {
//       setUsers([]);
//       snapshot.forEach(function (childSnapshot) {
//         setUsers((users) => [...users, childSnapshot.val()]);
//       });
//     });
    
//     // const childRemovedListener = userRef.on('child_removed', (snapshot) => {
//     //   // Set Your Functioanlity Whatever you want.
//     //   alert('Child Removed');
//     // });

//     // const childChangedListener = userRef.on('child_changed', (snapshot) => {
//     //   // Set Your Functioanlity Whatever you want.
//     //   alert('Child Updated/Changed');
//     // });

//     // return () => {
//     //   userRef.off('value', OnLoadingListener);
//     //   userRef.off('child_removed', childRemovedListener);
//     //   userRef.off('child_changed', childChangedListener);
//     // };
//   }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar navName="Консультант" navigation={navigation} backNav="Teachers" />
      <ScrollView contentContainerStyle={ { alignItems:'center', justifyContent: 'center'} }>
        <Card style={{marginBottom: 25}}>
              
                <View style={ { display: 'flex', flexDirection: 'row', width: '100%' } }>
                  <Image style={{width: 120, height: 120, borderRadius: 10}} source={{uri: route.params.user.userPhotoUrl}} />
                  <View style={ { width: '100%', flexShrink: 1 } }>
                    <NameTitle ellipsizeMode="tail" numberOfLines={2}>
                      {route.params.user.lastname + ' ' + route.params.user.firstname}
                    </NameTitle>
                    <EduTitle ellipsizeMode="tail" numberOfLines={2}>
                      Учится: {route.params.user.vuz}
                    </EduTitle>
                    <EduTitle ellipsizeMode="tail" numberOfLines={3}>
                      Курс: {route.params.user.course}
                    </EduTitle>
                  </View>
                </View>
                <DescTitle>
                  {route.params.user.description}
                </DescTitle>
              </Card>
        <View style={{width: '100%', alignItems:'center', justifyContent: 'center'}}>
          <SendQuery onPress={sendQuery} style={{borderColor: '#2B7AF3', backgroundColor: '#2B7AF3'}}>
            <Text style={{fontSize: 20, color: '#FFF', fontWeight: 'bold'}}>Записаться</Text>
        </SendQuery>
        <SendQuery style={{borderColor: '#2B7AF3'}}>
            <Text style={{fontSize: 20, color: '#2B7AF3', fontWeight: 'bold'}}>Пробный курс</Text>
        </SendQuery>
        </View>
        
        
      </ScrollView>
    <BottomTabNavigator background="#FFF" colorIcon="#868686" homeColorIcon="#2B7AF3" navigation={navigation} />
    </SafeAreaView>
  );
};