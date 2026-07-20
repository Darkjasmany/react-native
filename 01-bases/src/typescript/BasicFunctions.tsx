const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span> El resultado de la suma es {addTwoNumbers(2, 3)}</span>
    </>
  );
};

export default BasicFunctions;
