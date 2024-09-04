import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Filmes() {
    
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
    texto: {
      fontSize: 16,
      color: '#FFD700', 
    },
  });