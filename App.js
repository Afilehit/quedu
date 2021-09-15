import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
// In a React Native application
import MainStack from './navigate';

export default function App() {
  return (
    <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//This funciton will save a simple Person object