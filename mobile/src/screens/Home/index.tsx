import React from "react";
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

function Home() {
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
      <ScrollView style={styles.cardContainer} horizontal>
      </ScrollView>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
    </View>
  );
}

export default Home;
