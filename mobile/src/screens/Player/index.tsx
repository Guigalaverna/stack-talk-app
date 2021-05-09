  import React, { useEffect } from "react";
  import { Alert, Image, Text, View } from "react-native";
  import styles from "./styles";

  import Icon from "react-native-vector-icons/MaterialIcons";
  import Feather from "react-native-vector-icons/Feather";
  import Entypo from "react-native-vector-icons/Entypo";

  import { usePlayer } from "../../contexts/PlayerContext";
  import { useRoute } from "@react-navigation/core";
  import { BorderlessButton, RectButton } from "react-native-gesture-handler";
  import { useNavigation } from "@react-navigation/native";
  import TrackPlayer from "react-native-track-player";
  import colors from "../../styles/theme/colors";
import { Episode } from "../../../@types/Episode";
  interface ParamsProps {
    id: number;
  }

  function Player() {
    const route = useRoute();
    const { navigate } = useNavigation();

    const { id } = route.params as ParamsProps;
    const {
      episodeList,
      isPlaying,
      tooglePlaying,
      isShuffling,
      isLooping,
      toogleShuffling,
      toogleLoop,
      currentEpisodeIndex,
      
    } = usePlayer();

    if (!episodeList) {
      return;
    }
    const episode = episodeList.items[currentEpisodeIndex];

    useEffect(() => {
      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          id: String(episode.id),
          url: String(episode.audio.url),
          title: String(episode.title),
          artist: "Bruno Germano",
          artwork: String(episode.thumbnail),
        });
      });
    }, []);

    if (!episode) {
      return <View />
    }


    useEffect(() => {
      if (isPlaying) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }
    }, [isPlaying]);

    function backToHome() {
      TrackPlayer.stop();
      navigate("Home");
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <BorderlessButton onPress={backToHome}>
            <Icon name="arrow-back" size={24} color="white" />
          </BorderlessButton>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: episode.thumbnail }}
            style={{ borderRadius: 15, width: 256, height: 256 }}
          />
          <Text style={styles.title}>{episode.title}</Text>
        </View>
        <View style={styles.buttons}>
          <BorderlessButton onPress={toogleShuffling}>
            <Entypo
              name="shuffle"
              size={24}
              color={isShuffling ? colors.red : "white"}
            />
          </BorderlessButton>
          <BorderlessButton>
            <Entypo name="controller-jump-to-start" size={24} color="white" />
          </BorderlessButton>
          <RectButton
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.red,
              borderRadius: 15,
            }}
            onPress={tooglePlaying}
          >
            {isPlaying ? (
              <Entypo name="controller-paus" size={24} color="white" />
            ) : (
              <Entypo name="controller-play" size={24} color="white" />
            )}
          </RectButton>
          <BorderlessButton>
            <Entypo name="controller-next" size={24} color="white" />
          </BorderlessButton>
          <BorderlessButton onPress={toogleLoop}>
            <Feather
              name="repeat"
              size={24}
              color={isLooping ? colors.red : "white"}
            />
          </BorderlessButton>
        </View>
      </View>
    );
  }

  export default Player;
