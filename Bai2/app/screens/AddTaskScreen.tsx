import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../index";

type AddTaskNavigationProp = StackNavigationProp<RootStackParamList, "AddTask">;
type AddTaskRouteProp = RouteProp<RootStackParamList, "AddTask">;

type Props = {
  navigation: AddTaskNavigationProp;
  route: AddTaskRouteProp;
};

export default function AddTaskScreen({ navigation, route }: Props) {
  const { user } = route.params;
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        placeholder="input your job"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", { user })}
      >
        <Text style={{ color: "#fff" }}>FINISH →</Text>
      </TouchableOpacity>

      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png" }}
        style={{ width: 100, height: 100, marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 20 },
  button: { backgroundColor: "#00CFFF", padding: 12, borderRadius: 8 },
});
