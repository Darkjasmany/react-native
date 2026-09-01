import { View, Text, TextProps } from "react-native";
import React from "react";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  // Este patron ...rest indica que todas las properties le voy asignar a este texto
  // className = "mt-20 text-4xl text-light-primary dark:text-dark-primary";
  return (
    <Text
      // Aqui hacemos un join a cada posicion del arreglo, como esta el operador rest entiende que lo que le mandemos como texto se va a renderizar o podemos hacerlo en los props recibir el children y en vez de autocerrar el componente Text definir el children tambien funciona
      className={[
        "text-light-primary dark:text-dark-primary",
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default ThemedText;
