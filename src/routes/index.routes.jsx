import { useAuth } from "../contexts/auth.context";

export async function PrivateRoute({ children }) {
  const { signed } = useAuth();
  console.log("🚀 ~ file: index.routes.jsx:5 ~ PrivateRoute ~ signed", signed);

  return signed ? children : (window.location.href = "/redirect");
}
