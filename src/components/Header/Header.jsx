import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Mostrar/ocultar header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para navegar y hacer scroll a una sección
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Redirige a la página de inicio y espera que se monte
      navigate("/", { replace: false });

      // Espera un poco y luego hace scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // tiempo para esperar a que se renderice el DOM
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-10 bg-vino p-4 flex items-center justify-between transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <nav>
        <ul className="flex gap-4 text-white font-textos">
          <li><a href="/" className="hover:text-naranja">Inicio</a></li>
          <li><button onClick={() => scrollToSection("Menu")} className="hover:text-naranja">Menú</button></li>
          <li><button onClick={() => scrollToSection("SobreNosotros")} className="hover:text-naranja">Sobre nosotros</button></li>
          <li><button onClick={() => scrollToSection("Pedido")} className="hover:text-naranja">Contacto</button></li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <h1 className="text-white text-4xl font-bold font-logo">Caprice</h1>
        <img src="/2bfd5b66401be85952ea3c25116be1c5-removebg-preview.PNG" alt="Logo de la panadería" className="h-12 w-auto" />
      </div>
    </header>
  );
};

export default Header;
