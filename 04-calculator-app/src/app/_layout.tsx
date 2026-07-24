import { Platform, View } from "react-native";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { globalStyle } from "@/styles/global-style";

import { NavigationBar } from "expo-navigation-bar";

// Slot es un componente especial que actúa como un marcador de posición para el contenido que se renderizará dentro de este diseño raíz. En este caso, cualquier contenido que se pase a RootLayout se mostrará en el lugar donde se encuentra <Slot />. Esto permite que RootLayout sirva como un contenedor para otros componentes o páginas dentro de la aplicación, manteniendo una estructura consistente y reutilizable.

// StatusBar es un componente que permite controlar la apariencia de la barra de estado del dispositivo, como el color del texto y el fondo. En este caso, se utiliza para asegurarse de que la barra de estado se vea bien con el tema oscuro de la aplicación.

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setStyle("dark");
}

const RootLayout = () => {
  // Cargar la fuente local, extraemos loaded para con esto eliminar que la app cargue y luego cargue la fuente
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  // flex 1 para que se estire en toda la pantalla
  return (
    <View style={globalStyle.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
