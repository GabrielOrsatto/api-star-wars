import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personagem from './src/pages/Personagem';
import Detalhes from './src/pages/Detalhes';
import Sobre from './src/pages/Sobre';
import { Button } from 'react-native';
import StarWarsTheme from './src/pages/theme';  

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={StarWarsTheme}>
      <Stack.Navigator initialRouteName="Personagem">
        <Stack.Screen
          name="Personagem"
          component={Personagem}
          options={({ navigation }) => ({
            headerTitle: "Meus Personagens",
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Sobre')}  
                title="Sobre"
                color="#FFD700"  
              />
            ),
          })}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerTitle: "Sobre",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
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
