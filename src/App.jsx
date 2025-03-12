import { BrowserRouter} from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Secciones from "./components/Secciones/Seccioner.jsx"
import AppRoutes from "./routes.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Banner/>
          <Secciones/>
          <Menu/>
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

