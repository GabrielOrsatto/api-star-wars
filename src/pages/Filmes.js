import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Filmes(route) {
    const { movies } = route.params;
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>{movies.name}</Text>

        </View>
      );
    }

const styles = StyleSheet.create({
    texto: {
      fontSize: 16,
      color: '#FFD700', 
    },
  });