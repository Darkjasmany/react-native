import { createContext, PropsWithChildren, useContext } from "react";

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
export const themeChangerProvider = ({ children }: PropsWithChildren) => {};
