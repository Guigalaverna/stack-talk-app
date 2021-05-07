import { StyleSheet } from "react-native";
import colors from "../../styles/theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
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
  }
})