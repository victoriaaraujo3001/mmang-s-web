import { useAuth } from "../contexts/auth.context";

export async function PrivateRoute({ children }) {
  const { signed, token } = useAuth();

  return signed && token !== "" ? children : (window.location.href = "/redirect");
};