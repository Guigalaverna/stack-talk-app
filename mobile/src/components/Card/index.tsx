import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface CardProps {
  imageUrl: string;
  onPress: () => void;
}

function Card({ imageUrl, onPress }: CardProps) {
  return (
    <RectButton onPress={onPress} style={styles.card}>
      <View>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 175,
    height: 253,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 50
  },
});

export default Card;
