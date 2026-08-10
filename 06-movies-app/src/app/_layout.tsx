import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import "../../global.css";

// TODO: Se crea una instancia de QueryClient para manejar el estado de las consultas y la caché de datos en la aplicación. Esto nos permite centralizar la configuración de las consultas y reutilizarla en diferentes partes de nuestra aplicación.

// TODO: Para que el deslizamiento (swipe) funcione sin quedarse atascado, el GestureHandlerRootView no debe ir en el componente del carrusel ni en el HomeScreen. Debe ir en tu archivo principal de navegación. Regla de Expo Router.

const queryClient = new QueryClient();

// Se renderiza el componente Stack que nos permite manejar la navegación entre las diferentes pantallas de nuestra aplicación.
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
