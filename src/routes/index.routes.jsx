import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerTitle } from "../components/ContainerTitle";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { FormRegisterUser } from "../components/RegisterUser";
import { ViewOrder } from "../components/ViewOrder";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

export function RoutesAplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<Promotions />} />}>
          <Route path="/home"/>
        </Route>
        <Route element={<Home component={<ViewOrder/>} />}>
          <Route path="/categorias/:id"/>
        </Route>
        <Route element={<Register component={<FormRegisterUser/>} />}>
          <Route path="/register/user"/>
        </Route>
        <Route element={<Register component={<FormLoginUser/>} />}>
          <Route path="/login/user"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
