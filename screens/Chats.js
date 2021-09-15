import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button, View, Image, TouchableOpacity } from 'react-native';
import TopBar from "../components/TopBar";
import { Card, NameTitle } from '../components/styles';

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
import BottomTabNavigator from '../components/BottomTabNavigator';
import { child } from '@firebase/database';

const Chats = ({navigation}) => {
  const [Id, setId] = useState();
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const user = firebase.auth().currentUser;

  function setActiveChat(uid){
    firebase.database().ref('users/' + user.uid + '/activeChat').set({
        chat: uid
    }).then(() => {
        navigation.navigate("Chat")
    })
  }

  useEffect(() => {
    const groupRef = firebase.database().ref('/users/' + user.uid + '/leaders')
    groupRef.once('value').then( (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          setGroups((groups) => [...groups, childSnapshot.val()]);
        });
        
    });
    // const childRemovedListener = userRef.on('child_removed', (snapshot) => {
    //   // Set Your Functioanlity Whatever you want.
    //   alert('Child Removed');
    // });

    // const childChangedListener = userRef.on('child_changed', (snapshot) => {
    //   // Set Your Functioanlity Whatever you want.
    //   alert('Child Updated/Changed');
    // });

    // return () => {
    //   userRef.off('value', OnLoadingListener);
    //   userRef.off('child_removed', childRemovedListener);
    //   userRef.off('child_changed', childChangedListener);
    // };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar navName="Чаты" />
      <ScrollView>
        <View style={ { alignItems:'center', justifyContent: 'center', marginBottom: 100} }>
      
            {groups.map((item, index) => (
              <Card key={index}>
                <TouchableOpacity onPress={setActiveChat(item.uid)}>
                <View style={ { display: 'flex', flexDirection: 'row', width: '100%' } }>
                  <Image style={{width: 50, height: 50, borderRadius: 10}} source={{uri: item.userPhotoUrl}} />
                  <NameTitle>
                    Беседа {item.firstname + ' ' + item.lastname}
                  </NameTitle>
                </View>
                </TouchableOpacity>
              </Card>
            ))}
      
        </View>
      </ScrollView>
    <BottomTabNavigator background="#FFF" colorIcon="#868686" chatColorIcon="#2B7AF3" navigation={navigation} />
    </SafeAreaView>
  );
};
export default Chats;