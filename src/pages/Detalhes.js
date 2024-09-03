import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detalhes({ navigation, route }) {
  const { personagem } = route.params;

  useEffect(() => {
    navigation.setOptions({ name: personagem.name });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{personagem.name}</Text>
      <Text style={styles.texto}>Altura: {personagem.height}</Text>
      <Text style={styles.texto}>Peso: {personagem.mass}</Text>
      <Text style={styles.texto}>Cor do Cabelo: {personagem.hair_color}</Text>
      <Text style={styles.texto}>Cor da Pele: {personagem.skin_color}</Text>
      <Text style={styles.texto}>Cor dos Olhos: {personagem.eye_color}</Text>
      <Text style={styles.texto}>Gênero: {personagem.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    padding: 5,
    fontSize: 15
  }
});
