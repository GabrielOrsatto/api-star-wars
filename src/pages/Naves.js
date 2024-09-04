import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Naves() {
  return (
    <View>
      <Text style={styles.texto}>Naves</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    texto: {
      fontSize: 16,
      color: '#FFD700', 
    },
  });