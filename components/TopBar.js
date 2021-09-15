import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Svg_home from './icons/Svg_home';
import Svg_comment from './icons/Svg_comment';
import Svg_header from './icons/Svg_header';
import LinearGradient from 'react-native-linear-gradient';

import { Tab, Title, Add } from './styles';
import { View, Text, Button, TouchableOpacity } from 'react-native';
export default function TopBar({ navigation, navName, backNav }) {
    return (
        <View>
            <LinearGradient start={{x: 0, y: 2}} end={{x: 2, y: 0}} colors={['#3295FD', '#192BD8']} style={{ width: '100%', height: 60, display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: '#CCC'}}>
                <Text style={ {fontSize: 25, color: 'white'} }>{navName}</Text>
            </LinearGradient>
            { backNav ?
            <TouchableOpacity onPress={() => { navigation.navigate(backNav) }} style={ { position: 'absolute', left: 10, top: 16 } }>
                <FontAwesomeIcon icon={faChevronLeft} size={28} color='white' />
            </TouchableOpacity> : null
            }
        </View>

    )
}