import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import ChooseRole from './screens/ChooseRole';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Chat from './screens/Chat';
import Chats from './screens/Chats';
import RegChat from './screens/RegChat';
import { Teachers } from './components/Teachers';
import { Teacher } from './components/Teacher';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen
                name="Main"
                component={Main}
            />
           <Stack.Screen
                name="ChooseRole"
                component={ChooseRole}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
            />
            <Stack.Screen
                name="Chats"
                component={Chats}
            />
            <Stack.Screen
                name="RegChat"
                component={RegChat}
            />
            <Stack.Screen
                name="Teachers"
                component={Teachers}
            />
            <Stack.Screen
                name="Teacher"
                component={Teacher}
            />
        </Stack.Navigator>
    </NavigationContainer>
}