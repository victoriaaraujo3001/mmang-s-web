import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerTitle } from "../components/ContainerTitle";
import { ViewOrder } from "../components/ViewOrder";
import { Home } from "../screens/Home";

export function RoutesAplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<ContainerTitle text="Mais vendidos" />} />}>
          <Route path="/home"/>
        </Route>
        <Route element={<Home component={<ViewOrder/>} />}>
          <Route path="/pedidos"/>
        </Route>
        <Route element={<Home component={<ViewOrder/>} />}>
          <Route path="/categorias/:id"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
