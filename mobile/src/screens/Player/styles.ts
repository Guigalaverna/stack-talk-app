import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    position: "relative"
  },

  header: {
    width: '100%',
    padding: 20
  },

  title: {
    fontFamily: 'Jost-Medium',
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginTop: 20,
    marginHorizontal: 15
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: Dimensions.get('window').height - 650,
    width: '100%',
    paddingHorizontal: 55
  }
})