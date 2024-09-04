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
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens de Star Wars:</Text>
      <FlatList
        data={personagens}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detalhes', { personagem: item })}
          >
            <Text style={styles.texto}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titulo: {
    paddingBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700'
  },
  item: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: '#010175',
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#FFD700'
  }
});
