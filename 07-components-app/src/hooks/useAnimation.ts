import { Animated, Easing, PanResponder } from "react-native";
import { useRef } from "react";

const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current; // Inicializa el valor de la opacidad en 0 se usa useRef para mantener el valor entre renderizados
  const animatedTop = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current; // Inicializa el valor de la posición en 0,0 se usa useRef para mantener el valor entre renderizados

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

  // TODO Animated.ValueXY PanReponder
  /**
   * PanReponder es un objeto que permite manejar gestos de arrastre (drag) en la pantalla, en este caso se usa para mover un componente de forma interactiva con el dedo del usuario.
   * Se usa useRef para mantener el valor entre renderizados, evita que se limpie el estado del gesto mientras intectúas con el elemento.
   * useNativeDriver se pone en false porque React Native lanza un error si intentas animar propiedades basadas en layout (como top, left, right, bottom) con el driver nativo.
   * onMoveShouldSetPanResponder: () => true: Asegura que el responder tome el control continuo del gesto cuando arrastras el dedo por la pantalla.
   */
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true, // Importante para detectar el movimiento
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }, // panHandlers/layout requiere false
      ),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero Cambiado a false porque getLayout() maneja propiedades no nativas
        ).start();
      },
    }),
  ).current;

  return {
    animatedTop,
    animatedOpacity,
    pan, // Animated.ValueXY

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    panResponder,
  };
};

export default useAnimation;
