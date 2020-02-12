import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import { styles } from "./styles";

export const Home = ({ navigation }) => {
  const [form, setForm] = useState({ lastName: "", firstName: "", age: "" });
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Appli</Text>
      <Text style={styles.subTitle}>
        Bienvenue sur mon application React Native !
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nom"
        onChangeText={t => setForm({ ...form, lastName: t })}
        value={form.lastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Prénom"
        onChangeText={t => setForm({ ...form, firstName: t })}
        value={form.firstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Age"
        onChangeText={t => setForm({ ...form, age: t })}
        value={form.age}
      />
      {list.map(l => (
        <Text>
          {l.lastName} {l.firstName} ({l.age})
        </Text>
      ))}
      <Button
        onPress={() => {
          setList([...list, form]);
          setForm({ lastName: "", firstName: "", age: "" });
        }}
        title="Enregistrer"
      />
      <Button
        onPress={() => setForm({ lastName: "", firstName: "", age: "" })}
        title="Reset"
      />
      <Button onPress={() => setList([])} title="Annuler" />
      <View style={styles.container}>
        <Button onPress={() => setCount(count + 1)} title="+" />
        <Button onPress={() => setCount(count - 1)} title="-" />
        <Text>Count : {count}</Text>
      </View>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
