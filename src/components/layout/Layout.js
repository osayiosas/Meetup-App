
import { Navbar } from "./Navbar";
import "./layout.css";

export const Layout = (props) => {
    return (
      <div>
        <Navbar />

            <main className="main">
               {props.children} 
        </main>
      </div>
    );
}

export default Layout
