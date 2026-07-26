import { useEffect, useRef, useState } from "react";
enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0); // corta la primera parte
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");
    lastOperation.current = undefined;
  };

  const toogleSign = () => {
    if (number.startsWith("-")) {
      setNumber(number.replace("-", " "));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const symbolOperation = (symbol: string) => {
    setLastNumber();
    switch (symbol) {
      case Operator.add:
        lastOperation.current = Operator.add;
        break;
      case Operator.subtract:
        lastOperation.current = Operator.subtract;
        break;
      case Operator.multiply:
        lastOperation.current = Operator.multiply;
        break;
      default:
        lastOperation.current = Operator.divide;
        break;
    }
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue); // NaN

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const buildNumber = (numberString: string) => {
    // Verificar si existe el punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar el 0000.00
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    // Concatenamos el numbero con el numero string
    setNumber(number + numberString);
  };

  return {
    // Props
    formula,
    number,
    prevNumber,
    // Methods
    buildNumber,
    clean,
    toogleSign,
    deleteLast,
    symbolOperation,
    calculateSubResult,
    calculateResult,
  };
};
