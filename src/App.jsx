import { BrowserRouter} from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Secciones from "./components/Secciones/Secciones.jsx"
import AppRoutes from "./routes.jsx"
import SobreNosotros from "./components/SobreNosotros/SobreNosotros.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Banner/>
          <Secciones/>
          <Menu/>
          <SobreNosotros/>
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

