import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";

export default function Naves({ route }) {
  const { starships, personagem } = route.params;
  const [detalhesNaves, setDetalhesNaves] = useState([]);

  const buscarDetalhesNaves = async () => {
    try {
        if (!starships || starships.length === 0) {
            console.log('Nenhuma nave encontrada.');
            return;
        }
      const requests = starships.map((url) => axios.get(url));
      const responses = await Promise.all(requests);
      const detalhes = responses.map((response) => response.data);
      setDetalhesNaves(detalhes);
    } catch (error) {
      console.error("Erro ao obter detalhes das naves", error.message);
    }
  };

  useEffect(() => {
    buscarDetalhesNaves();
  }),
    [];

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Naves do {personagem}</Text>
      <FlatList
        data={detalhesNaves}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
            <View style={styles.lista}>
          <Text style={styles.texto}>Nome: {item.name}</Text>
          <Text style={styles.texto}>Modelo: {item.model}</Text>
          <Text style={styles.texto}>Passageiros: {item.passengers}</Text>

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
        backgroundColor: '#555D50',
        padding: 20,
        margin: 20,
        borderRadius: 10,
      },
  texto: {
    fontSize: 16,
    color: "#FFD700",
  },
});
