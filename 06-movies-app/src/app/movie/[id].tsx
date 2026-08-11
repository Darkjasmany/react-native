import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  return (
    <ScrollView>
      <Text>{movieQuery.data?.title ?? "No tien"}</Text>
    </ScrollView>
  );
};

export default MovieScreen;
