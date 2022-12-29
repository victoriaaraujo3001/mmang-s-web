import { Routes, Route } from "react-router-dom";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { FormRegisterUser } from "../components/RegisterUser";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      <Route element={<Home component={<Promotions />} />}>
        <Route path="/home" />
      </Route>
      <Route element={<Register component={<FormRegisterUser />} />}>
        <Route path="/cadastro/usuario" />
      </Route>
      <Route element={<Register component={<FormLoginUser />} />}>
        <Route path="/login/usuario" />
      </Route>
    </Routes>
  );
}
