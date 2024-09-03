import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Personagem from './pages/Personagem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagem">
        <Stack.Screen name="Personagem" component={Personagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
