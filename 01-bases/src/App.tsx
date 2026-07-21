// import BasicTypes from "./typescript/BasicTypes";
// import ObjectLiterals from "./typescript/ObjectLiterals";
// import BasicFunctions from "./typescript/BasicFunctions";
// import Counter from "./components/Counter";
// import LoginPages from "./components/LoginPages";
import UsersPages from "./components/UsersPages";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // 4. Envolver el AuthProvider en todos los hijos de mi aplicacion, ya que el AuthProvider tiene un children
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className=" text-4xl mb-5">React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPages /> */}
        <UsersPages />
      </div>
    </AuthProvider>
  );
}

export default App;
