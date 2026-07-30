import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

// Todo: Otras forma de navegar a la pantalla de perfil utilizando el componente Link de expo-router. El componente Link permite crear enlaces de navegación entre pantallas de manera declarativa, lo que facilita la navegación en la aplicación.

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5 flex flex-col gap-3">
        <CustomButton
          color={"primary"}
          onPress={() => router.push("/drawer/(tabs)/(stack)/products")} // Esto permite navegar a la pantalla de productos cuando se presiona el botón
        >
          Productos
        </CustomButton>
        <Link href={"/drawer/(tabs)/(stack)/profile"} asChild>
          <CustomButton color={"secondary"}>Profile</CustomButton>
        </Link>
        <CustomButton
          color={"tertiary"}
          onPress={() => router.push("/drawer/(tabs)/(stack)/products")} // Esto permite navegar a la pantalla de productos cuando se presiona el botón
        >
          Productos
        </CustomButton>
        <CustomButton
          className="uppercase"
          variant="text-only"
          onPress={() => router.push("/drawer/(tabs)/(stack)/settings")}
        >
          Settings
        </CustomButton>
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
