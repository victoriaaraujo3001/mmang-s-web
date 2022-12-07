import { Navbar } from "../../components/NavBar";
import login from "../../assets/login.jpg";
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
