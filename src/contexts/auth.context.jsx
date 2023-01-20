import { useContext, createContext, useEffect, useState } from "react";
import { getIdUser, getToken } from "../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoagind] = useState(true);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await getToken();
      const storageUser = await getIdUser();

      if (storageToken && storageUser) {
        setUser(storageUser);
      } else {
        // função logout
        console.log("else logout");
      }

      setLoagind(true);
    }
    try {
      loadStorageData();
    } catch (error) {
      console.log("🚀 ~ file: auth.context.jsx:29 ~ useEffect ~ error", error);
      alert("erro", error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        token: "",
        user,
        loading,
        loadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  console.log("🚀 ~ file: auth.context.jsx:52 ~ useAuth ~ context", context);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default { AuthProvider, useAuth };
