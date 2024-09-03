import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Gabriel Orsatto (1135097){"\n"}
        Otávio Lorenzatto (1134984)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
    texto: {
        fontSize: 16,
    }
  
});