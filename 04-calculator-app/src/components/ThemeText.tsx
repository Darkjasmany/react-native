import { View, Text, type TextProps } from "react-native";
import React from "react";
import { globalStyle } from "@/styles/global-style";

// extens para que mi componente acepte todas las properties por defecto del padre TextProps, y tampoco tengo que definir el children porque ya lo tiene por default.

// Para destructurar todas las properties de TextProps con el operador ... seguido del nombre que le quiera dar

interface Props extends TextProps {
  // children: string;
  variant?: "h1" | "h2";
}

// cuando aplico mas de 1 estilo se abre y cierra llave
const ThemeText = ({ children, variant = "h1", ...rest }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyle.mainResult,
        variant === "h2" && globalStyle.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
