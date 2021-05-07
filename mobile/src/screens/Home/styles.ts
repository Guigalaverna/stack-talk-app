import { Dimensions, StyleSheet } from "react-native";

import colors from "../../styles/theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  findNewEpisodes: {
    fontFamily: "Jost-Medium",
    fontSize: 24,
    color: "white",
    alignSelf: "flex-start",

    marginLeft: 30,
    marginTop: 20,
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",

    marginTop: 20,
    padding: 15,

    height: 70,

    borderRadius: 10,
    width: Dimensions.get("window").width - 60,
  },

  cardContainer: {
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    height: 150,
    width: Dimensions.get("window").width,
    marginTop: 50,
    marginHorizontal: 10,

    position: "relative",
  },

  anotherEpisodesCard: {
    width: 90,
    height: 90,
    borderRadius: 15,

    marginLeft: 50,
    marginTop: 20,
  }
})