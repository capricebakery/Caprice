import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Desayunos from "./pages/Desayunos.jsx";
import Pasteles from "./pages/Pasteles.jsx";
import Panaderia from "./pages/Panaderia.jsx";
import Pasabocas from "./pages/Pasabocas.jsx";
import Postres from "./pages/Postres.jsx";
import Adicionales from "./pages/Adicionales.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/desayunos" element={<Desayunos/>}/>
            <Route path="/pasteles" element={<Pasteles/>}/>
            <Route path="/panaderia" element={<Panaderia/>}/>
            <Route path="/pasabocas" element={<Pasabocas/>}/>
            <Route path="/postres" element={<Postres/>}/>
            <Route path="/adicionales" element={<Adicionales/>}/>
        </Routes>
    );
};

export default AppRoutes;