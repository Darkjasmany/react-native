// Todo Este hook permite obtener dinámicamente un color según el tema actual del dispositivo (Claro u Oscuro), permitiendo además sobrescribir el color por defecto si la vista o componente lo necesita.

import { useColorScheme } from "react-native"; // Usa useColorScheme() para leer la preferencia del sistema operativo.

import { Colors } from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  // Aseguramos que 'theme' solo sea 'light' o 'dark'
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? "dark" : "light";

  // Busca si se pasó un color personalizado por las props
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    // Retorna el color global definido en el archivo Colors
    return Colors[theme][colorName];
  }
}
