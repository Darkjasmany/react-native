import { useEffect } from "react";

import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Para asegurarnos del scroll

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { allRoutes } from "@/constants/Routes";

import "../../global.css";

// TODO: Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor(
    // { light: "#0B57A4", dark: "#c01c28" }, // aqui si quero mandar colores, caso contrario un {} vacio y coge los colores por defecto de tailwind que configure
    {},
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
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: "" }} />
          {/* Nota: Asume que cada elemento de allRoutes es un array [name, title]. Si en realidad son objetos {(name, title)}, el destructuring sería{(name, title)} en lugar de [name, title]. */}
          {/* {allRoutes.map((route) => ( */}
          {allRoutes.map(({ name, title }) => (
            <Stack.Screen key={name} name={name} options={{ title: title }} />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
