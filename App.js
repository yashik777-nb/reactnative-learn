import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [outputText, setOutputtext] = useState("Hello App");

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputtext("The text Changed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
