import { View, Text } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import {
  DrawerActions,
  StackActions,
} from "expo-router/build/react-navigation";
import { Ionicons } from "@expo/vector-icons";

// Stack.Screen se utiliza para definir las diferentes pantallas que forman parte de la navegación en la aplicación. Cada pantalla se asocia con un nombre único y puede tener opciones de configuración, como el título que se mostrará en la barra de navegación. En este caso, se definen cuatro pantallas: "home/index", "products/index", "profile/index" y "settings/index", cada una con su respectivo título.

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop()); // Todo: Esto permite regresar a la pantalla anterior en la pila de navegación, si es posible. La función pop elimina la pantalla actual de la pila y muestra la pantalla anterior.
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer); // Todo: Esto permite abrir o cerrar el Drawer dependiendo de su estado actual. La función toggleDrawer alterna entre abrir y cerrar el menú lateral (Drawer) desde cualquier pantalla de la aplicación.
  };

  return (
    <Stack
      screenOptions={{
        animation: "ios_from_right", // Se establece la animación predeterminada para la transición entre pantallas en dispositivos iOS, haciendo que las nuevas pantallas se deslicen desde la derecha.
        headerShown: true, // Se indica que la barra de navegación (header) se mostrará en todas las pantallas, proporcionando un título y opciones de navegación consistentes.
        headerShadowVisible: false, // Se desactiva la sombra del encabezado para un diseño más limpio y minimalista, eliminando la línea de separación entre el encabezado y el contenido de la pantalla.
        contentStyle: { backgroundColor: "#fff" }, // Se establece el color de fondo del contenido de todas las pantallas en blanco, asegurando una apariencia uniforme y clara en toda la aplicación.
        headerLeft: ({ tintColor, canGoBack }) => (
          // Todo: HeaderLeft se utiliza para personalizar el contenido que se muestra en el lado izquierdo de la barra de navegación. En este caso, se renderiza un ícono de Ionicons que cambia según si se puede regresar a la pantalla anterior (canGoBack). Si es posible regresar, se muestra un ícono de flecha hacia atrás; de lo contrario, se muestra un ícono de cuadrícula. Al presionar el ícono, se llama a la función onHeaderLeftPress, que maneja la acción correspondiente (regresar o abrir/cerrar el Drawer).
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeftPress(canGoBack!)}
          />
        ),
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
