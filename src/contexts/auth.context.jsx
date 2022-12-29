import { useEffect, useState } from "react";
import { createContext } from "react";
import { getToken } from "../services/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userStoragedData, setUserStoragedData] = useState(null);

  useEffect(() => {
    !userStoragedData && getuserData();
  }, []);

  async function getuserData() {
    setUserStoragedData(await getToken());
  }

  return (
    <AuthContext.Provider value={{ userStoragedData, setUserStoragedData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
