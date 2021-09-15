import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { withDecay } from 'react-native-reanimated'
 
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
 
export default function ChooseRole( { navigation }) {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={{width: '100%', height: '100%'}}>
          <TouchableOpacity style={styles.slide1} onPress={()=> {navigation.navigate('SignUp', { Role: 'Ученик'})}}>
            <Text style={styles.text}>Ученик</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{width: '100%', height: '100%'}}>
          <TouchableOpacity style={styles.slide2} onPress={()=> {navigation.navigate('SignUp', { Role: 'Ведущий'})}}>
            <Text style={styles.text}>Учитель</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
}