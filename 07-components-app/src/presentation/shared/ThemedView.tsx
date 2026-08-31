import { View, Text, ViewProps } from "react-native";
import React from "react";
import { Background } from "expo-router/build/react-navigation";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
}: Props) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();

  return (
    // <View className="bg-light-background dark:bg-dark-background">
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1, //  tome todo el espacio disponible
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
