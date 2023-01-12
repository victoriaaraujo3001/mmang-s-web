import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormLoginUser } from "../components/LoginUser";
import { Promotions } from "../components/Promotions";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { FormRegisterUser } from "../components/RegisterUser";
import { Favorites } from "../components/Favorites/index";
import { PrivateRoute } from "./index.routes";
import RedirectUser from "../components/RedirectUser";
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
        <Route element={<RedirectUser/>}>
          <Route path="/redirect" />
        </Route>
        <Route
          path="/favoritos"
          element={
            <PrivateRoute>
              <Home component={<Favorites />} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
