import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button, View, Image, TouchableOpacity } from 'react-native';
import { Card, NameTitle, EduTitle, DescTitle } from './styles';
import TopBar from "./TopBar";
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

export const Teachers = ({navigation}) => {
  const [Id, setId] = useState();
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = firebase.database().ref('/users').orderByChild('verified').equalTo('true');
    userRef.once('value').then( (snapshot) => {
      setUsers([]);
      snapshot.forEach(function (childSnapshot) {
        setUsers((users) => [...users, childSnapshot.val()]);
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
      <TopBar navName="Главная" />
      <ScrollView>
        <View style={ { alignItems:'center', justifyContent: 'center', marginBottom: 100} }>
      
            {users.map((item, index) => (
              <Card key={index}>
                <TouchableOpacity onPress={() => { navigation.navigate('Teacher', { user: item } ) }}>
                <View style={ { display: 'flex', flexDirection: 'row', width: '100%' } }>
                  <Image style={{width: 120, height: 120, borderRadius: 10}} source={{uri: item.userPhotoUrl}} />
                  <View style={ { width: '100%', flexShrink: 1 } }>
                    <NameTitle ellipsizeMode="tail" numberOfLines={2}>
                      {item.lastname + ' ' + item.firstname}
                    </NameTitle>
                    <EduTitle ellipsizeMode="tail" numberOfLines={2}>
                      Учится: {item.vuz}
                    </EduTitle>
                    <EduTitle ellipsizeMode="tail" numberOfLines={3}>
                      Курс: {item.course}
                    </EduTitle>
                  </View>
                </View>
                <DescTitle ellipsizeMode="tail" numberOfLines={10}>
                  {item.description}
                </DescTitle>
                </TouchableOpacity>
              </Card>
            ))}
      
        </View>
      </ScrollView>
    <BottomTabNavigator background="#FFF" colorIcon="#868686" homeColorIcon="#2B7AF3" navigation={navigation} />
    </SafeAreaView>
  );
};