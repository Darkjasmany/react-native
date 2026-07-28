import { Pressable, PressableProps, Text, View } from "react-native";
import React from "react";

// En React Native, la diferencia principal radica en que View es un contenedor estático para diseño, mientras que Pressable es un componente interactivo diseñado específicamente para detectar y responder a gestos de toque.

interface Props extends PressableProps {
  // Aquí puedes definir las propiedades que tu componente recibirá, por ejemplo:
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

// Todo: React.forwardRef es una función que permite a los componentes funcionales recibir una referencia (ref) desde su componente padre. Esto es útil cuando se necesita acceder directamente a un elemento del DOM o a un componente hijo para manipularlo, como enfocar un campo de texto o medir su tamaño. En este caso, se utiliza para permitir que el componente CustomButton reciba una ref que puede ser utilizada por el componente padre para interactuar con él de manera directa.

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: Props,
    ref: React.Ref<View>,
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color]; // Todo: Esto selecciona la clase de color correspondiente según la propiedad color.

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    // Todo: Propiedad del Pressable: activeOpacity es una propiedad que define la opacidad del componente cuando está activo (presionado). Esto proporciona retroalimentación visual al usuario, indicando que el botón ha sido presionado. En este caso, se utiliza active:opacity-90 para reducir la opacidad al 90% cuando el botón está activo. Si no tuvieramos configurado NativeWind, podríamos usar la propiedad style para lograr un efecto similar, por ejemplo: style={{ opacity: isPressed ? 0.9 : 1 }}. o su equivalente a style={({pressed})=>({opacity: pressed ? 0.9 : 1})}

    // Todo: OnPress y OnLongPress: onPress es una propiedad que define la función que se ejecutará cuando el usuario presione el botón. onLongPress es similar, pero se activa cuando el usuario mantiene presionado el botón durante un período de tiempo más largo. Esto permite diferenciar entre un toque rápido y una presión prolongada, ofreciendo más opciones de interacción para el usuario.

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 ${className} rounded-xl ${btnColor} active:opacity-90`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-work-medium">
          {children}
        </Text>
      </Pressable>
    );
  },
);

export default CustomButton;
