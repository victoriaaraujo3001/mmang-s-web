import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { Favorites } from "../components/Favorites/index";
import { Promotions } from "../components/Promotions/index";
import { useAuth } from "../contexts/auth.context";

export function AppRoutes() {
  const { loading, signed } = useAuth();
  console.log("🚀 ~ file: app.routes.jsx:9 ~ AppRoutes ~ loading", loading)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home component={<Promotions />} />}>
          <Route path="/home" />
        </Route>
        <Route path="/favoritos" element={<Home component={<Favorites />} />}/>
      </Routes>
    </BrowserRouter>
  );
}
