import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Gabriel Orsatto {"\n"}1135097@atitus.edu.br {"\n"}RA 1135097{"\n"}{"\n"}
        Otávio Lorenzatto {"\n"}1134984@atitus.edu.br {"\n"}RA 1134984
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',  
  },
  texto: {
    fontSize: 16,
    color: '#FFD700', 
    lineHeight: 25
  },
});
