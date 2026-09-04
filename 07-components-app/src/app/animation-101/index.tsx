import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();
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
      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({}); //  TODO al enviar {} se usan los valores por defecto de la función
          startMovingTopPosition({});
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
