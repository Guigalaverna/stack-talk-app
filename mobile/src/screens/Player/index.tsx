import React, { useEffect } from "react";
import { Alert, Image, Text, View } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";
import { usePlayer } from "../../contexts/PlayerContext";
import { useRoute } from "@react-navigation/core";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import TrackPlayer from 'react-native-track-player';
interface ParamsProps {
  id: number;
}

function Player() {
  const route = useRoute();
  const { navigate } = useNavigation()

  const { id } = route.params as ParamsProps;
  const { episodeList, isPlaying } = usePlayer();

  if (!episodeList) {
    return;
  }

  const episode = episodeList.items[Number(id)];

  useEffect(() => {
    if (isPlaying) {
      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          id: String(episode.id),
          url: String(episode.audio.url),
          title: String(episode.title),
          artist: 'Bruno Germano',
          artwork: String(episode.thumbnail)
        })
      })
  
      TrackPlayer.play();
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton onPress={() => navigate('Home')}>
          <Icon name="arrow-back" size={24} color="white" />
        </BorderlessButton>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: episode.thumbnail }}
          style={{ borderRadius: 15, width: 256, height: 256 }}
        />
        <Text style={styles.title}>{episode.title}</Text>
      </View>
    </View>
  );
}

export default Player;
