import React, { Component } from 'react';
import { Login } from "../components/Login";
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/BottomTabNavigator'

// In a React Native application

export default function SignIn( { navigation }) {
        return (
            <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 40, marginBottom: 10 }}> Авторизация </Text>
                <Login />
                <Text onPress={() => navigation.navigate('SignUp')}>Регистрация</Text>
                <BottomTabNavigator background="#FFF" colorIcon="#000000" colorTitle="#000000" navigation={navigation} thisColorIcon="#61C5FF"/>
            </SafeAreaView>
        );
};
