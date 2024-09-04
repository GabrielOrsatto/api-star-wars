import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";

export default function Filmes({ route }) {
  const { films, personagem } = route.params;
  const [detalhesFilmes, setDetalhesFilmes] = useState([]);

  const buscarDetalhesFilmes = async () => {
    try {
        if (!films || films.length === 0) {
            console.log('Nenhuma nave encontrada.');
            return;
        }
      const requests = films.map((url) => axios.get(url));
      const responses = await Promise.all(requests);
      const detalhes = responses.map((response) => response.data);
      setDetalhesFilmes(detalhes);
    } catch (error) {
      console.error("Erro ao obter detalhes dos filmes", error.message);
    }
  };

  useEffect(() => {
    buscarDetalhesFilmes();
  }),
    [];

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Filmes do {personagem}</Text>
      <FlatList
        data={detalhesFilmes}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
            <View style={styles.lista}>
          <Text style={styles.texto}>Título: {item.title}</Text>
          <Text style={styles.texto}>Diretor: {item.director}</Text>
          <Text style={styles.texto}>Data de Lançamento: {item.release_date}</Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
      },
    titulo: {
        paddingBottom: 30,
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFD700",
      },
    lista: {
        backgroundColor: '#010175',
        padding: 20,
        margin: 20,
        borderRadius: 10,
      },
  texto: {
    fontSize: 16,
    color: "#FFD700",
  },
});
