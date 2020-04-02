import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Main from './pages/Main';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                 <AppStack.Screen name="Login" component={Login} />
                 <AppStack.Screen name="Main" component={Main} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}