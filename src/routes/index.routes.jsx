import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { FormRegisterUser } from "../components/RegisterUser";
import { Requests } from "../components/Requests";
import { ViewProduct } from "../components/ViewProduct";
import { ViewProducts } from "../components/ViewProducts";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

export function RoutesAplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<Promotions />} />}>
          <Route path="/home"/>
        </Route>
        <Route element={<Home component={<ViewProducts/>} />}>
          <Route path="/categorias/:id"/>
        </Route>
        <Route element={<Register component={<FormRegisterUser/>} />}>
          <Route path="/register/user"/>
        </Route>
        <Route element={<Register component={<FormLoginUser/>} />}>
          <Route path="/login/user"/>
        </Route>
        <Route element={<Home component={<ViewProduct/>} />}>
          <Route path="/book/:id"/>
        </Route>
        <Route element={<Home component={<Requests/>} />}>
          <Route path="/pedidos"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
