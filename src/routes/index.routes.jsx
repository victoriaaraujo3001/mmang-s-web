import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerTitle } from "../components/ContainerTitle";
import { FormUser } from "../components/FormUser";
import { ViewOrder } from "../components/ViewOrder";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

export function RoutesAplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<ContainerTitle text="Mais vendidos" />} />}>
          <Route path="/home"/>
        </Route>
        <Route element={<Home component={<ViewOrder/>} />}>
          <Route path="/categorias/:id"/>
        </Route>
        <Route element={<Register component={<FormUser/>} />}>
          <Route path="/register/user"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
