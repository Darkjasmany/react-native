import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme, Text, View } from "react-native";
import { useFonts } from "expo-font";

import "../../global.css";
import { useEffect } from "react";

// TODO: Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background">
        <Text className="mt-20 text-4xl text-light-primary dark:text-dark-primary">
          Hola Mundo
        </Text>
      </View>
    </ThemeProvider>
  );
}
