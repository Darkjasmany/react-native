import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FAB from "./components/FAB";

/***
 * Componentes en React Native
 * En React Native, los componentes son funciones que devuelven elementos de la interfaz de usuario. En este caso, el componente App devuelve un View que contiene un Text y un StatusBar, Ya no hay div s, h1, p, etc. como en React para la web. En su lugar, se usan componentes específicos de React Native como View, Text, Image, etc.
 * El componente StatusBar es un componente que permite controlar la barra de estado del dispositivo. En este caso, se está usando el estilo "auto", que ajusta automáticamente el color del texto y el fondo de la barra de estado según el tema del dispositivo.
 * Pressable es un componente que permite detectar interacciones del usuario, como toques o presiones. En este caso, se está usando para crear un botón que incrementa el contador cuando se presiona. El evento onPress se dispara cuando el usuario toca el componente, y en este caso se llama a la función setCount para actualizar el estado del contador.
 * EL TouchableOpacity es otro componente que permite detectar interacciones del usuario, pero a diferencia de Pressable, TouchableOpacity cambia la opacidad del componente cuando se presiona, lo que da un efecto visual de retroalimentación al usuario. En este caso, se está usando para crear un botón que decrementa el contador cuando se presiona. El evento onPress se dispara cuando el usuario toca el componente, y en este caso se llama a la función setCount para actualizar el estado del contador.
 * StyleSheet es una forma de crear estilos en React Native. Es similar a CSS, pero con algunas diferencias. Por ejemplo, en lugar de usar guiones para separar palabras, se usan camelCase. Además, los valores de las propiedades deben ser cadenas de texto o números.
 */

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      {/* 
      <Pressable
        style={styles.floatingButton}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Incrementar +1
        </Text>
      </Pressable>

      <TouchableOpacity
        style={styles.floatingButtonLeft}
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Decrementar -1
        </Text>
      </TouchableOpacity> */}

      <FAB
        label="+1"
        position="right"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
      />
      <FAB
        label="-1"
        position="left"
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textHuge: {
    fontSize: 120,
    fontWeight: "bold",
  },
});
