import { View, Text, FlatList } from "react-native";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}

const MoviesHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className="font-bold text-3xl px-4 mb-2">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} // Para que no se muestre la barra de scroll horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }} // Para que no se pegue a los bordes de la pantalla
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterPath={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MoviesHorizontalList;
