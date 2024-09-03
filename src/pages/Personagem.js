import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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

export default function Personagem() {
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
    <View style={styles.container}>
      <Text>Personagens de Star Wars:</Text>
      <FlatList
        data={personagens}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Altura: {item.height}</Text>
            <Text>Peso: {item.mass}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
});
