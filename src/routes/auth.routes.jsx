import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { FormRegisterUser } from "../components/RegisterUser";
import { Favorites } from "../components/Favorites/index";
import RedirectUser from "../components/RedirectUser";
import { Requests } from "../components/Requests";
import { ViewProducts } from "../components/ViewProducts";
import { ViewProduct } from "../components/ViewProduct";
import { PayOrder } from "../components/PayOrder";
import { NotFoundScreen } from "../screens/NotFound";
export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<Promotions />} />}>
          <Route path="/home" />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
        <Route element={<Register component={<FormRegisterUser />} />}>
          <Route path="/cadastro/usuario" />
        </Route>
        <Route element={<Register component={<FormLoginUser />} />}>
          <Route path="/login/usuario" />
        </Route>
        <Route element={<RedirectUser />}>
          <Route path="/redirect" />
        </Route>
        <Route path="/favoritos" element={<Home component={<Favorites />} />} />
        <Route path="/pedidos" element={<Home component={<Requests />} />} />
        <Route
          path="/categorias/:id"
          element={<Home component={<ViewProducts />} />}
        />
        <Route
          path="/manga/:id"
          element={<Home component={<ViewProduct />} />}
        />
        <Route
          path="/pagamento/pedido/:id"
          element={<Home component={<PayOrder />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
