import { View, Text } from "react-native";
import React from "react";
import { globalStyle } from "@/styles/global-style";
import { Colors } from "@/constants/theme";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";
import { Label } from "expo-router";

const CalculatorApp = () => {
  const {
    buildNumber,
    formula,
    number,
    prevNumber,
    clean,
    toogleSign,
    deleteLast,
    symbolOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyle.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h1">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Filas de Botones */}
      <View style={globalStyle.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toogleSign}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => symbolOperation("÷")}
        />
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => symbolOperation("x")}
        />
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => symbolOperation("-")}
        />
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => symbolOperation("+")}
        />
      </View>

      <View style={globalStyle.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton label="." onPress={() => buildNumber(".")} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
