import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({ pathname: "/home", params: { user: name || "Twinkle" } })
        }
      >
        <Text style={styles.buttonText}>GET STARTED ➜</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "purple", marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 8, width: "100%", padding: 10, marginBottom: 20 },
  button: { backgroundColor: "#00CFFF", padding: 15, borderRadius: 8 },
  buttonText: { color: "white", fontWeight: "bold" },
});
