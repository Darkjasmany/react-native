import React, { useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Carousel } from "react-native-reanimated-carousel";
import { Movie } from "@/infrastructure/interfaces/movie.interface";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<any>(null);
  const { width } = useWindowDimensions(); // De esta manera obtenemos el ancho de la pantalla del dispositivo para ajustar el tamaño del carrousel

  // Manera como se quiere renderizar cada item del carrousel, en este caso se renderiza un componente MovieCard que recibe como props la pelicula
  // width es el grosor de las tarjetas internas del carrousel, en este caso se quiere que parezcan tarjetas
  return (
    <GestureHandlerRootView className="w-full h-[350px]">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <View className="flex-1 justify-center items-center bg-gray-200 rounded-xl m-2">
            <Text className="text-center font-bold text-lg">{item.title}</Text>
          </View>
        )}
        width={width * 0.8} // Ancho de la tarjeta individual (80% de la pantalla)
        height={350} // Altura requerida por TypeScript
        // Ajustamos el tamaño del carrousel para que se vea como un carrusel de tarjetas
        style={{
          width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </GestureHandlerRootView>
  );
};

export default MainSlideshow;
