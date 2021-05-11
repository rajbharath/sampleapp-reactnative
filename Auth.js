import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './domain/session/LoginScreen';
import HomeScreen from './HomeScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
export default function Auth() {
    const session = useSelector((state) => state.session);
    return (
        session.loggedIn ? (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>

        ) : (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        )
    );
}

