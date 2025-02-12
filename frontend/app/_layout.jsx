import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)/sign-in"
        options={{ title: "Sign Ina", headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/log-in"
        options={{ title: "Log In", headerShown: false }}
      />
      <Stack.Screen name="+not-found" />{" "}
    </Stack>
  );
}
