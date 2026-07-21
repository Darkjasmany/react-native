import { useAuthContext } from "../context/AuthContext";

const LoginPages = () => {
  const { isChecking, isAuthenticated } = useAuthContext();

  if (isChecking) {
    return <h1>Verificando Autenticación</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <button className="bg-red-500 p-2 text-white rounded-xl mt-2">
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Inicia Sesion</h3>
          <button className="bg-blue-500 p-2 text-white rounded-xl mt-2">
            Login
          </button>
        </>
      )}
    </>
  );
};

export default LoginPages;
