import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../index";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export default function HomeScreen({ navigation, route }: Props) {
  const { user } = route.params;
  const [tasks, setTasks] = useState<string[]>(["To check email", "UI task web page", "Learn javascript basic"]);
  const [search, setSearch] = useState("");

  const deleteTask = (task: string) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi {user},</Text>
      <Text style={styles.subHeader}>Have a great day ahead</Text>

      <TextInput
        style={styles.search}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={tasks.filter((t) => t.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(item)}>
              <Text style={{ color: "red" }}>🗑</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddTask", { user })}
      >
        <Text style={{ fontSize: 28, color: "#fff" }}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold" },
  subHeader: { marginBottom: 20 },
  search: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  taskText: { fontSize: 16 },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#00CFFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
