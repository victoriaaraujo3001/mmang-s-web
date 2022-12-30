import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { getToken } from "../services/auth.js";

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
import { NotFoundScreen } from "../screens/NotFound";

export function RoutesAplication() {
  const { userStoragedData } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!userStoragedData);
    console.log("userStoragedData",!!userStoragedData)

    async function onAuth() {
      try {
        const viewOnBoarding = await getToken();
        if (viewOnBoarding) {
          setIsLoggedIn(false);
          return;
        } else {
          setIsLoggedIn(true);
          return;
        }
      } catch (error) {
        console.warn("Error", error);
      }
    }

    onAuth();
    setLoading(true);
    console.log("passei aqui routes", !!userStoragedData, userStoragedData);
  }, [userStoragedData]);

  const PrivateRoute = (props) => {
    if (userStoragedData) {
      if (props.pathname === "/") {
        return redirect("/home");
      } else if (props.pathname === "*") {
        return redirect("/error-pages/error-404");
      } else {
        return (
          <Routes>
            <Route element={props.children}>
              <Route path={props.pathname} />
            </Route>
          </Routes>
        );
      }
    } else {
      return <Navigate replace={true} to="/cadastro/usuario" />;
    }
  };
  console.log("loading", loading)

  return (
    <BrowserRouter>
    {/* outra opção para trazer a validação do useContext (caso usado não é necessario a função de private routes)*/}
      {/* { userStoragedData ? <WebRoutes /> : <AuthRoutes /> } */}
      {loading && (
        //rotas para o usuário caso autenticado
        <Routes>
          <Route
            element={
              <PrivateRoute pathname="/pedidos">
                <Home component={<Requests />} />
              </PrivateRoute>
            }
          >
            <Route path="/pedidos" />
          </Route>
          <Route
            element={
              <PrivateRoute pathname="/categorias/:id">
                <Home component={<ViewProducts />} />
              </PrivateRoute>
            }
          >
            <Route path="/categorias/:id" />
          </Route>
          <Route
            element={
              <PrivateRoute pathname="/manga/:id">
                <Home component={<ViewProduct />} />
              </PrivateRoute>
            }
          >
            <Route path="/manga/:id" />
          </Route>
          <Route
            element={
              <PrivateRoute pathname="/favoritos">
                <Home component={<Favorites/>} />
              </PrivateRoute>
            }
          >
            <Route path="/favoritos" />
          </Route>
          <Route
            element={
              <PrivateRoute pathname="/pagamento/pedido/:id">
                <Home component={<PayOrder />} />
              </PrivateRoute>
            }
          >
            <Route path="/pagamento/pedido/:id" />
          </Route>
          {/* rotas liberadas para acesso */}
          <Route element={<Home component={<Promotions />} />}>
            <Route path="/home" />
          </Route>
          <Route element={<Register component={<FormRegisterUser />} />}>
            <Route path="/cadastro/usuario" />
          </Route>
          <Route element={<Register component={<FormLoginUser />} />}>
            <Route path="/login/usuario" />
          </Route>
           {/* rota de not_found */}
          <Route path="*" element={<NotFoundScreen/>} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
