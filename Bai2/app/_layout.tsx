import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function Layout() {
  return (
    <TaskProvider>
      <Stack />
    </TaskProvider>
  );
}
