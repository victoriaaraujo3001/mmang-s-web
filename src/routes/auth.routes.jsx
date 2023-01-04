import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { FormRegisterUser } from "../components/RegisterUser";

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
}
