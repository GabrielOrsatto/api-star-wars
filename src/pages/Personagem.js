import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const nomesDosPersonagens = ["Luke Skywalker", "Darth Vader", "Han Solo", "Yoda", "Chewbacca"];

async function obterPersonagem(nomeDoPersonagem) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people?search=${nomeDoPersonagem}`);
    const personagem = response.data.results[0];

    if (personagem) {
      return personagem;
    } else {
      console.log(`Personagem "${nomeDoPersonagem}" não encontrado!`);
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter o personagem', error.message);
    return null;
  }
}

export default function Personagens({ navigation }) {
  const [personagens, setPersonagens] = useState([]);

  async function listarPersonagens() {
    const personagensObtidos = [];
    for (let i = 0; i < nomesDosPersonagens.length; i++) {
      const personagem = await obterPersonagem(nomesDosPersonagens[i]);
      if (personagem) {
        personagensObtidos.push(personagem);
      }
    }
    setPersonagens(personagensObtidos);
  }

  useEffect(() => {
    listarPersonagens();
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Personagens de Star Wars:</Text>
      <FlatList
        data={personagens}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { personagem: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',  
  },

  titulo:{
    paddingBottom: 15,
    alignItems: center, 
    color: '#FFD700',
  },

  texto: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFD700',  
  },
});
