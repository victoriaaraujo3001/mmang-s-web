import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../contexts/auth.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "../screens/Register";
import { FormLoginUser } from "../components/LoginUser";

export function RoutesAplication() {
  const { loading, signed } = useAuth();
  console.log(
    "🚀 ~ file: index.routes.jsx:7 ~ RoutesAplication ~ signed",
    signed
  );
  console.log(
    "🚀 ~ file: index.routes.jsx:7 ~ RoutesAplication ~ loading",
    loading
  );

  // if (loading) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //       <Route path="/login/usuario" element={<Register component={<FormLoginUser />} />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
