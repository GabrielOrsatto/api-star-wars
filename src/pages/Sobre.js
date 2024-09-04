import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Gabriel Orsatto {"\n"}1135097@atitus.edu.br {"\n"}RA 1135097{"\n"}
        {"\n"}
        Otávio Lorenzatto {"\n"}1134984@atitus.edu.br {"\n"}RA 1134984
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/gremio.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  texto: {
    fontSize: 16,
    color: "#FFD700",
    lineHeight: 25,
  },
  imageContainer: {
    width: 300, 
    height: 300, 
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
