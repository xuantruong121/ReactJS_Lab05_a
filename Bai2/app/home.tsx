import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTask } from "../context/TaskContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
    const { user } = useLocalSearchParams<{ user?: string }>();
    const { tasks } = useTask();
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/100" }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.username}>Hi {user || "Twinkle"}</Text>
                    <Text style={styles.subtitle}>Have a grate day a head</Text>
                </View>
            </View>

            {/* Search */}
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="gray" />
                <TextInput
                    style={{ flex: 1, marginLeft: 5 }}
                    placeholder="Search"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Task list */}
            <FlatList
                data={tasks.filter((t) =>
                    t.toLowerCase().includes(search.toLowerCase())
                )}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Ionicons name="checkbox" size={22} color="green" />
                        <Text style={styles.taskText}>{item}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.redBox} />
                            <MaterialIcons
                                name="edit"
                                size={22}
                                color="red"
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                    </View>
                )}
                style={{ marginTop: 15 }}
            />

            {/* Floating button */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push("/add")}
            >
                <Ionicons name="add" size={36} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    username: { fontSize: 18, fontWeight: "bold" },
    subtitle: { fontSize: 14, color: "gray" },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        elevation: 2,
    },
    taskItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e9ecef",
        marginVertical: 6,
        padding: 12,
        borderRadius: 12,
        elevation: 1,
    },
    taskText: { flex: 1, marginLeft: 10, fontSize: 16 },
    redBox: { width: 30, height: 15, backgroundColor: "red", borderRadius: 3 },
    fab: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        backgroundColor: "#00CFFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
});
