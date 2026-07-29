import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

// Stack.Screen se utiliza para definir las diferentes pantallas que forman parte de la navegación en la aplicación. Cada pantalla se asocia con un nombre único y puede tener opciones de configuración, como el título que se mostrará en la barra de navegación. En este caso, se definen cuatro pantallas: "home/index", "products/index", "profile/index" y "settings/index", cada una con su respectivo título.

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "ios_from_right", // Se establece la animación predeterminada para la transición entre pantallas en dispositivos iOS, haciendo que las nuevas pantallas se deslicen desde la derecha.
        headerShown: true, // Se indica que la barra de navegación (header) se mostrará en todas las pantallas, proporcionando un título y opciones de navegación consistentes.
        headerShadowVisible: false, // Se desactiva la sombra del encabezado para un diseño más limpio y minimalista, eliminando la línea de separación entre el encabezado y el contenido de la pantalla.
        contentStyle: { backgroundColor: "#fff" }, // Se establece el color de fondo del contenido de todas las pantallas en blanco, asegurando una apariencia uniforme y clara en toda la aplicación.
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Productos" }}
        // options={{ title: "Productos", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Perfil" }}
        // options={{ title: "Perfil", animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes" }}
        // options={{ title: "Ajustes", animation: "ios_from_left" }}
      />
    </Stack>
  );
};

export default StackLayout;
