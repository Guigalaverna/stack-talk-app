import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import StackTalkLogo from '../../assets/Logo.png';

import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'
import { usePlayer } from "../../contexts/PlayerContext";
import api from "../../services/api";
import Card from "../../components/Card";

function Home() {
  const { addEpisodes, episodeList } = usePlayer()

  useEffect(() => {
    async function getEpisodes() {
      const { data } = await api.get('/episodes')

      addEpisodes(data)
    }

    getEpisodes()
  }, [])

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
      <ScrollView style={[styles.cardContainer, { paddingLeft: 50, paddingRight: 50, }]} horizontal>
        { episodeList?.items.map(item => {
          return (
            <Card key={item.id} imageUrl={item.thumbnail} onPress={console.warn} />
          )
        })}
      </ScrollView>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
    </View>
  );
}

export default Home;
