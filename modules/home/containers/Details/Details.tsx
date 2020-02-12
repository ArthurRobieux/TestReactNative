import React from "react";
import { Text, View, Button, Image, SectionList } from "react-native";

import { styles } from "./styles";

export const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.subTitle}>Bienvenue sur les details</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Image
        source={{
          uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
          width: 64,
          height: 64
        }}
      />
      <SectionList
        scrollEnabled={false}
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie"
            ]
          }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  );
};
