import Banner from "../components/Banner/Banner.jsx";
import Menu from "../components/Menu/Menu.jsx";
import Secciones from "../components/Secciones/Secciones.jsx"
import SobreNosotros from "../components/SobreNosotros/SobreNosotros.jsx";
import Pedidos from "../components/Pedidos/Pedidos.jsx";



export default function Home () {
    return (
        <div>
            <Banner/>
            <Secciones/>
            <Menu/>
            <SobreNosotros/>
            <Pedidos/>
        </div>
    );
}