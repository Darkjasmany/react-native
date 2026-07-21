import { useAuthContext } from "../context/AuthContext";

const LoginPages = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando Autenticación</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() => logout()}
            className="bg-red-500 p-2 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Inicia Sesion</h3>
          <button
            onClick={() => {
              loginWithEmailPassword("jasmanyfranco@gmail.com", "123456");
            }}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};

export default LoginPages;
