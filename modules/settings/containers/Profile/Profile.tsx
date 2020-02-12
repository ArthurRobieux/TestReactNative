import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles";

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subTitle}>Bienvenue sur le Profile</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
