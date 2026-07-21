import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

// 1. Tipos principales
type AuthStatus = "checking" | "authenticated" | "unauthenticated";

interface User {
  name: string;
  email: string;
}

// Contrato de lo que realmente ofrece el Contexto por ahora
interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  // Methods
  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

// 2. Definir el contexto
export const AuthContext = createContext({} as AuthState);

// 3. Custom Hook para consumir el contexto
// Este customHook va a exponer todo lo que AuthContext exponga
export const useAuthContext = () => useContext(AuthContext);

// 4. Proveedor del contexto
// de manera global hay que crear un proveedor que envolvera todo el proyecto en su nivel mas alto, se lo define en App.tsx, esta function provider regresa un componente
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("unauthenticated");
    }, 1500);

    return () => clearTimeout(timer); // Limpieza de timeout al desmontar
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(password);
    setUser({
      name: "Jasmany Franco",
      email,
    });
    setStatus("authenticated");
  };

  const logout = () => {
    setUser(undefined);
    setStatus("unauthenticated");
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        user,

        // Getter
        isChecking: status === "checking",
        isAuthenticated: status === "authenticated",

        // Method
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
