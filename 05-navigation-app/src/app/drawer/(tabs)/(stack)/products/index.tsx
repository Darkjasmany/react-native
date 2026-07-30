import { View, Text, FlatList } from "react-native";
import React from "react";
// import { products } from "../../../../store/products.store";
import { Link } from "expo-router";
import { products } from "../../../../../../store/products.store";

// todo: FlatList es un componente de React Native que se utiliza para renderizar listas de datos de manera eficiente. Es especialmente útil cuando se trabaja con grandes conjuntos de datos, ya que solo renderiza los elementos visibles en la pantalla, mejorando el rendimiento y la experiencia del usuario. En este caso, se está utilizando FlatList para mostrar una lista de productos en la pantalla de productos.
const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={`/drawer/(tabs)/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
