import { AuthProvider } from "./contexts/auth.context";
import { RoutesAplication } from "./routes/index.routes";

function App() {
  return (
    <AuthProvider>
      <RoutesAplication />
    </AuthProvider>
  );
}

export default App;
