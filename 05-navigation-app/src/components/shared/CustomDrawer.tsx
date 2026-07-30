import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "expo-router/drawer";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    // este componente me va a permitir hacer scroll, scroolenable si no queremos el scroll
    <DrawerContentScrollView
      {...props} // aqui esparcimos todas las properties que tenemos por ahi
      scrollEnabled={false}
    >
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">VJFP</Text>
        </View>
      </View>

      {/* Draweritems */}
      {/* Aqui exparsimos nuestras props */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
