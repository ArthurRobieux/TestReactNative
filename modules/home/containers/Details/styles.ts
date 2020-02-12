import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30
  },
  title: {
    color: "black",
    fontSize: 20,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    width: "100%",
    textAlign: "center",
    padding: 10
  },
  subTitle: {
    color: "brown",
    fontSize: 14,
    padding: 10
  },
  item: {
    width: "100%",
    backgroundColor: "lightgray",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center"
  },
  sectionHeader: { width: "100%", backgroundColor: "gray", height: 20 }
});
