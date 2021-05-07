import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";
import { usePlayer } from "../../contexts/PlayerContext";
import { useRoute } from "@react-navigation/core";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface ParamsProps {
  id: number;
}

function Player() {
  const route = useRoute();
  const { navigate } = useNavigation()

  const { id } = route.params as ParamsProps;
  const { episodeList } = usePlayer();

  if (!episodeList) {
    return;
  }

  const episode = episodeList.items[Number(id)];

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
