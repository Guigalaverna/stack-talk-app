import React from "react";
import { Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

function MiniCard({ item, styles, onPress }: any) {
  return (
    <RectButton key={item.id} style={styles} onPress={onPress}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 90, height: 90, borderRadius: 15 }}
      />
    </RectButton>
  );
}


export default MiniCard