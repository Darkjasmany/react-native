import { View, Text, ActivityIndicator, SafeAreaViewBase } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets(); // Obtenemos los valores de safe area para ajustar el contenido de la pantalla
  const { nowPlayingQuery } = useMovies();

  // Aqui se puede manejar el estado de carga, error y exito de la consulta de películas
  // Por ejemplo, si la consulta está cargando, se puede mostrar un indicador de carga

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    // TODO Ajustamos el padding superior de la vista para que no se superponga con la barra de estado del dispositivo segun los valores de safe area obtenidos por useSafeAreaInsets, safeArea.top nos da el valor del padding superior necesario para que el contenido no se superponga con la barra de estado del dispositivo
    <View style={{ paddingTop: safeArea.top }} className="mt-2">
      <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
      {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}
    </View>
  );
};

export default HomeScreen;
