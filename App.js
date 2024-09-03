import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Personagem from './src/pages/Personagem';
import Detalhes from './src/pages/Detalhes';
import { Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagem">
        <Stack.Screen name="Personagem" component={Personagem} 
          options={{
            headerTitle: "Meus Personagens",
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity onPress={() => Alert.alert("Teste")}>
                <Ionicons name="exit" size={25} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Detalhes" component={Detalhes} 
          options={{
            headerTitle: "Detalhes",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
