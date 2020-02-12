import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles";

export const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
