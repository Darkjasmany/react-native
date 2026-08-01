import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "expo-router/build/react-navigation";

// Todo: Otras forma de navegar a la pantalla de perfil utilizando el componente Link de expo-router. El componente Link permite crear enlaces de navegación entre pantallas de manera declarativa, lo que facilita la navegación en la aplicación.

const HomeScreen = () => {
  // Para abrir el Drawer se hace de la siguiente manera, utilizando el router de expo-router y la función openDrawer. Esto permite abrir el menú lateral (Drawer) desde cualquier pantalla de la aplicación.
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer); // Esto permite abrir o cerrar el Drawer dependiendo de su estado actual
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5 flex flex-col gap-3">
        <CustomButton
          color={"primary"}
          onPress={() => router.push("/products")} // Esto permite navegar a la pantalla de productos cuando se presiona el botón
        >
          Productos
        </CustomButton>
        <Link href={"/profile"} asChild>
          <CustomButton color={"secondary"}>Profile</CustomButton>
        </Link>
        <CustomButton
          color={"tertiary"}
          onPress={() => router.push("/products")} // Esto permite navegar a la pantalla de productos cuando se presiona el botón
        >
          Productos
        </CustomButton>
        <CustomButton
          className="uppercase"
          variant="text-only"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>
        <CustomButton onPress={onToggleDrawer}>Abrir Menú</CustomButton>
        {/* <Link href={"/products"} className="">
          Productos
        </Link>
        <Link href={"/profile"}>Perfil</Link>
        <Link href={"/settings"}>Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
