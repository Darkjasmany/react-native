interface Person {
  age: number;
  name: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

const ObjectLiterals = () => {
  const person: Person = {
    age: 35,
    name: "Jasmany",
    lastName: "Franco",
    address: {
      country: "Ecuador",
      houseNo: "1007",
      street: "Cdla Urbanor",
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
