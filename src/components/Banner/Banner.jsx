import { useState, useEffect } from "react";

const images = [
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg"
  ];
  
  const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Cambia cada 3 segundos
  
      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);
  
    return (

      <div className="relative w-full min-h-screen overflow-hidden z-0">
        {/* Contenedor del carrusel */}
        <div className="w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="absolute w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
  
        {/* Texto sobre las imágenes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h1 className="text-5xl font-titulos">¡Cuando el antojo llama, Caprice responde!</h1>
        </div>
      </div>
    );
  };

  export default Banner;