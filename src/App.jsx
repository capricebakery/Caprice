import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Secciones from "./components/Secciones/Secciones.jsx";
import Menu from "./components/Menu/Menu.jsx";

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Banner/>
        <Secciones/>
        <Menu/>
      </main>
      <Footer/>
    </div>
  );
}

