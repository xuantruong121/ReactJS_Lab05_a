import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useTask } from "../context/TaskContext";

export default function AddScreen() {
    const [job, setJob] = useState<string>("");
    const { addTask } = useTask();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADD YOUR JOB</Text>
            <TextInput
                style={styles.input}
                placeholder="Input your job"
                value={job}
                onChangeText={setJob}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (job.trim()) {
                        addTask(job.trim());
                        router.back();
                    }
                }}
            >
                <Text style={styles.buttonText}>FINISH ➜</Text>
            </TouchableOpacity>

            <Image
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                }}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        width: "100%",
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    button: { backgroundColor: "#00CFFF", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
    buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
    image: { width: 150, height: 150, resizeMode: "contain", marginTop: 40 },
});
