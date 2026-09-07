import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import FadeInImage from "@/presentation/images/FadeInImage";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]); // 6,7,8,9,10,11
  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  // fLASTlIST PERMITE RENDERIZAR ELEMENTOS SEGUN LO QUE SE REQUEIRE
  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore} // Cuando llegamos al final llamamos nuestra funcion
        onEndReachedThreshold={0.6} // Indica que cuando este al 60% empiece a cargar la siguiente pagina
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  );
};
