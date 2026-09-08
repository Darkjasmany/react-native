import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "@/constants/Colors";

// Primero definir la interface
interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  bgColor: string;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

// Segundo definir el Contexto y definir su valor inicial
const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Tercero Custom Hook para acceder al ThemeChangerContext, se lo defini aqui para evitar muchas importaciones, este custom hook lo unico que hace es tener la importacion del use context y regresarlo
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);
  return themeChanger;
};

// Cuarto Provider es el objeto o funcional component que va a envolver mi aplicacion para que puedan acceder a este context
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);
  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";

  const backgroundColor = isDarkMode
    ? Colors.dark.background
    : Colors.light.background;

  useEffect(() => {
    AsyncStorage.getItem("selected-theme").then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === "dark");
      setIsSystemThemeEnabled(theme === "system");
      setColorScheme(theme as "light" | "dark" | "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemThemeEnabled,
          bgColor: backgroundColor,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnabled(false);

            // TODO: Guardar en Storage
            await AsyncStorage.setItem(
              "selected-theme",
              isDarkMode ? "light" : "dark",
            );
          },

          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");
            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
