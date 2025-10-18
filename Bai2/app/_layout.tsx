import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="add-task" options={{ title: "Add Task" }} />
    </Stack>
  );
}
