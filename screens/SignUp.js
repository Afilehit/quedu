import React, { Component } from 'react';
import { Register } from "../components/Register";
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faBars, faLock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/BottomTabNavigator';
import TopBar from '../components/TopBar';

// In a React Native application
export default function SignUp( {navigation, route} ) {
        //alert(route.params.Role)
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>    
                <Text style={{ fontSize: 40, marginBottom: 10 }}> Регистрация </Text>
                <Register navigation={navigation} route={route}/>
            </View>
        );
}