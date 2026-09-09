import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { useTheme } from "@/hooks/use-theme";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  // const backgroundColor = useThemeColor({}, "background"); // Devuelve directamente la cadena hexadecimal del color
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.background },
          // contentStyle: { backgroundColor },
        }}
      >
        {/* <Stack.Screen name="index" options={{ title: "Push App" }} />\{" "} */}
        <Stack.Screen name="index" options={{ title: "" }} />
      </Stack>
      {/* <AnimatedSplashOverlay /> */}
      {/* <AppTabs /> */}
    </ThemeProvider>
  );
}
