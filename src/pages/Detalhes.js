import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Detalhes({ navigation, route }) {
  const { personagem } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: personagem.name });
  }, [navigation, personagem.name]);

  const navegacaoNaves = () => {
    navigation.navigate("Naves", { starships: personagem.starships , personagem: personagem.name });
  };

  const navegacaoFilmes = () => {
    navigation.navigate("Filmes", { films: personagem.films, personagem: personagem.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{personagem.name}</Text>
      <Text style={styles.texto}>Altura: {personagem.height}</Text>
      <Text style={styles.texto}>Peso: {personagem.mass}</Text>
      <Text style={styles.texto}>Cor do Cabelo: {personagem.hair_color}</Text>
      <Text style={styles.texto}>Cor da Pele: {personagem.skin_color}</Text>
      <Text style={styles.texto}>Cor dos Olhos: {personagem.eye_color}</Text>
      <Text style={styles.texto}>Gênero: {personagem.gender}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navegacaoNaves}>
          <Text style={styles.buttonText}>Naves</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navegacaoFilmes}>
          <Text style={styles.buttonText}>Filmes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#000000",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFD700",
  },
  texto: {
    padding: 5,
    fontSize: 15,
    color: "#FFD700",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#010175",
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFD700",
    fontSize: 16,
  },
});
