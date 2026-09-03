import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current; // Inicializa el valor de la opacidad en 0 se usa useRef para mantener el valor entre renderizados
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    // TODO Animación de opacidad para hacer que el componente aparezca gradualmente
    Animated.timing(animatedOpacity, {
      toValue: 1, // Valor final de la opacidad,
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: true, // Utiliza el driver nativo para mejorar el rendimiento de la animación
    }).start(); // Inicia la animación

    // TODO Animación de posición para hacer que el componente se desplace hacia abajo
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      // easing: Easing.elastic(1), // easing para hacer que la animación tenga un efecto en este caso elastico
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0, // Valor final de la opacidad,
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: true, // Utiliza el driver nativo para mejorar el rendimiento de la animación
      // }).start(); // Inicia la animación
      // }).start(() => animatedTop.setValue(-100)); // Inicia la animación y al finalizar la animación de opacidad, se reinicia la posición del componente
    }).start(() => animatedTop.resetAnimation()); // Inicia la animación y al finalizar la animación de opacidad, se reinicia la posición del componente

    /*
    //  Animación de posición para hacer que el componente se deplace hacia arriba, se pude hacer de otra forma en el animate de arriba
    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
    }).start();
*/
  };

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity, // Aplica el valor de opacidad animado al estilo del componente
          // Aplica el valor de posición animado al estilo del componente
          transform: [
            {
              translateY: animatedTop, // Aplica la animación de posición vertical al componente
            },
          ],
        }}
      />
      <ThemedButton className="my-5" onPress={fadeIn}>
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={fadeOut}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
