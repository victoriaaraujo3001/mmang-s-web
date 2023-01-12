import { AuthProvider } from "./contexts/auth.context";
import { AuthRoutes } from "./routes/auth.routes";

function App() {
  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
}

export default App;
