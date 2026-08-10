import React, { useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";
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
    <View id="carousel-component" className="w-full h-[350px]">
      <Carousel
        autoplayInterval={2000} // Intervalo de tiempo para que el carrousel avance automaticamente
        ref={ref}
        data={movies}
        loop={true} // Para que el carrousel se repita infinitamente
        style={{ width, height: 350 }} // Ancho y alto del carrousel
        itemSize={width * 0.8}
        defaultIndex={1} // Indice inicial del carrousel, en este caso se quiere que empiece en la segunda tarjeta
        layout={{
          type: "parallax", // Tipo de layout del carrousel
          scale: 0.9, // Escala de las tarjetas internas del carrousel
          offset: 50, // Offset de las tarjetas internas del carrousel
        }}
        renderItem={({ item }) => (
          <View className="flex-1 justify-center items-center bg-gray-200 rounded-xl m-2">
            <Text className="text-center font-bold text-lg">{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainSlideshow;
