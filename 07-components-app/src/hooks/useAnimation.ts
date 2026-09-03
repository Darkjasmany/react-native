import { Animated, Easing } from "react-native";
import { useRef } from "react";

const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current; // Inicializa el valor de la opacidad en 0 se usa useRef para mantener el valor entre renderizados
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear, // es una función que define la curva de animación, en este caso es lineal, pero se puede cambiar a otras como Easing.bounce, Easing.elastic(1), etc.
    callback = () => {}, // Callback que se ejecuta al finalizar la animación
  }) => {
    // TODO Animación de opacidad para hacer que el componente aparezca gradualmente
    Animated.timing(animatedOpacity, {
      toValue: toValue, // Valor final de la opacidad,
      duration: duration, // Duración de la animación en milisegundos
      useNativeDriver: useNativeDriver, // Utiliza el driver nativo para mejorar el rendimiento de la animación
      easing: easing,
    }).start(callback); // Inicia la animación
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {}, // Callback que se ejecuta al finalizar la animación
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue, // Valor final de la opacidad,
      duration: duration, // Duración de la animación en milisegundos
      useNativeDriver: useNativeDriver, // Utiliza el driver nativo para mejorar el rendimiento de la animación
      easing: easing,
      // }).start(); // Inicia la animación
      // }).start(() => animatedTop.setValue(-100)); // Inicia la animación y al finalizar la animación de opacidad, se reinicia la posición del componente
      // }).start(() => animatedTop.resetAnimation()); // Inicia la animación y al finalizar la animación de opacidad, se reinicia la posición del componente
    }).start(callback);

    /*
    //  Animación de posición para hacer que el componente se deplace hacia arriba, se pude hacer de otra forma en el animate de arriba
    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
    }).start();
*/
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 700,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.bounce,
    callback = () => {}, // Callback que se ejecuta al finalizar la animación
  }) => {
    animatedTop.setValue(initialPosition); // Inicializa la posición del componente en -100, para que aparezca desde arriba
    // TODO Animación de posición para hacer que el componente se desplace hacia abajo
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      // easing: Easing.elastic(1), // easing para hacer que la animación tenga un efecto en este caso elastico
      easing: easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};

export default useAnimation;
