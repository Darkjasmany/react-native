import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

//  todo: Se recomienda que el archivo index.tsx de la carpeta app sea el punto de entrada principal de la aplicación. Este archivo se encarga de renderizar la pantalla inicial y puede incluir componentes como SafeAreaView para asegurar que el contenido se muestre correctamente en diferentes dispositivos. Además, se pueden agregar enlaces de navegación a otras pantallas, como la pantalla de productos, utilizando el componente Link de expo-router.
export default function index() {
  return <Redirect href={"/(stack)/home/index"} />;

  // return (
  // Si no queremos que el contenido de la pantalla se superponga con la barra de estado, podemos envolver nuestro contenido en un componente SafeAreaView. Este componente asegura que el contenido se renderice dentro de los límites seguros de la pantalla, evitando que se superponga con elementos del sistema como la barra de estado o la barra de navegación.
  // <SafeAreaView>
  //   <View className="mt-6 mx-2.5">
  //     <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-4xl text-primary font-work-black">
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-3xl text-secondary font-work-medium">
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-2xl text-secondary-200 font-work-light">
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-xl  text-tertiary">Hola Mundo</Text>
  //     <Link href={"/products"}>Productos</Link>
  //   </View>
  // </SafeAreaView>
  // );
}
