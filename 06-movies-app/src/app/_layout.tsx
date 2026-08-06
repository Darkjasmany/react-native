import { View, Text } from "react-native";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "../../global.css";
import { Stack } from "expo-router";

// TODO: Se crea una instancia de QueryClient para manejar el estado de las consultas y la caché de datos en la aplicación. Esto nos permite centralizar la configuración de las consultas y reutilizarla en diferentes partes de nuestra aplicación.

const queryClient = new QueryClient();

// Se renderiza el componente Stack que nos permite manejar la navegación entre las diferentes pantallas de nuestra aplicación.
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
}
