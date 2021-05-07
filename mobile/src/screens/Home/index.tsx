import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import StackTalkLogo from "../../assets/Logo.png";

import Icon from "react-native-vector-icons/Feather";

import styles from "./styles";
import { usePlayer } from "../../contexts/PlayerContext";
import api from "../../services/api";
import Card from "../../components/Card";
import MiniCard from "../../components/MiniCard";
import { useNavigation } from "@react-navigation/core";

function Home() {
  const { addEpisodes, episodeList } = usePlayer();
  const { navigate } = useNavigation();

  useEffect(() => {
    async function getEpisodes() {
      const { data } = await api.get("/episodes");

      addEpisodes(data);
    }

    getEpisodes();
  }, []);

  const fiveEpisodes = episodeList?.items.slice(0, 5);
  const restEpisodes = episodeList?.items.slice(6, episodeList.items.length);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={StackTalkLogo}
          style={{ marginTop: 20, marginLeft: 20 }}
        />
      </View>
      <Text style={styles.findNewEpisodes}>Encontre novos episódios</Text>
      <View style={styles.searchBox}>
        <Icon name="search" size={24} />
        <TextInput />
      </View>
      <ScrollView
        style={[styles.cardContainer, { paddingLeft: 50, paddingRight: 50 }]}
        horizontal
      >
        {fiveEpisodes?.map((item) => {
          return (
            <Card
              key={item.id}
              imageUrl={item.thumbnail}
              onPress={() => navigate('Player', { id: item.id })}              
            />
          );
        })}
      </ScrollView>
      <Text
        style={{
          marginLeft: 30,
          color: "white",
          fontFamily: "Jost-Medium",
          fontSize: 24,
        }}
      >
        Outros episódios
      </Text>
      <ScrollView horizontal>
        {restEpisodes?.map((item) => {
          return (
            <MiniCard
              key={item.id}
              item={item}
              styles={styles.anotherEpisodesCard}
              onPress={() => navigate("Player", { id: item.id })}
            />
          );
        })}
      </ScrollView>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
    </View>
  );
}

export default Home;
