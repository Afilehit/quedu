import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faBars, faLock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/BottomTabNavigator'

// In a React Native application

export default function Notification( { navigation }) {
        return (
            <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 40, marginBottom: 10 }}> Недавние уведомления (В разработке)</Text>
                <BottomTabNavigator background="#FFF" colorIcon="#868686" notificationColorIcon="#2B7AF3" navigation={navigation} />
            </SafeAreaView>

        );
};