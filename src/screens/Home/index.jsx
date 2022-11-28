import { ContainerTitle } from "../../components/ContainerTitle";
import { Navbar } from "../../components/NavBar";
import "./style.css";

export function Home(props) {
  return (
    <body>
      <nav>
        <Navbar />
      </nav>
      <main className="main-content">{props.component}</main>
    </body>
  );
}
