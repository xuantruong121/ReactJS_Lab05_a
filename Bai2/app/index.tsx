import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button title="Go to Home" onPress={() => router.push("/home?user=Nam")} />
    </View>
  );
}