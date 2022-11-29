import { Navbar } from "../../components/NavBar";
import "./style.css";

export function Register(props) {
  return (
    <body>
      <nav>
        <Navbar />
      </nav>
      <main className="main-register">{props.component}</main>
    </body>
  );
}
