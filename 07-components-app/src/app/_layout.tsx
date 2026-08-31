import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Para asegurarnos del scroll

import "../../global.css";
import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedView from "@/presentation/shared/ThemedView";

// TODO: Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor(
    { light: "indigo", dark: "blue" },
    "background",
  );
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <ThemedView className="bg-light-background dark:bg-dark-background"> */}
        <ThemedView>
          <Text className="mt-20 text-4xl text-light-primary dark:text-dark-primary">
            Hola Mundo
          </Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
