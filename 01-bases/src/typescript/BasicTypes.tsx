const BasicTypes = () => {
  const name: string = "Jasmany";
  const age: number = 35;
  const isActive: boolean = true;
  const powers: string[] = ["React", "ReactNative", "Astro"];
  return (
    <>
      <h3>Tipos Básico</h3>
      {name} - {age} - {isActive ? "Activo" : "No Activo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};

export default BasicTypes;
