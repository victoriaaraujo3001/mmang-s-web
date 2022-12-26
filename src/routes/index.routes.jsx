import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "../components/Favorites";
import { FormLoginUser } from "../components/LoginUser";
import { PayOrder } from "../components/PayOrder";
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
          <Route path="/cadastro/usuario"/>
        </Route>
        <Route element={<Register component={<FormLoginUser/>} />}>
          <Route path="/login/usuario"/>
        </Route>
        <Route element={<Home component={<ViewProduct/>} />}>
          <Route path="/manga/:id"/>
        </Route>
        <Route element={<Home component={<Requests/>} />}>
          <Route path="/pedidos"/>
        </Route>
        <Route element={<Home component={<Favorites/>} />}>
          <Route path="/favoritos"/>
        </Route>
        <Route element={<Home component={<PayOrder/>} />}>
          <Route path="/pagamento/pedido/:id"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
