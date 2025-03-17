const Secciones = () => {
    const topDelicias = [
      { src: "/img/top1.png", nombre: "Torta de chocolate con cerezas" },
      { src: "/img/top2.png", nombre: "Bolovan relleno de pollo" },
    ];
  
    const recientesHorno = [
      { src: "/img/recientes1.png", nombre: "Mojicones" },
      { src: "/img/recientes2.png", nombre: "Merengones" },
    ];
  
    return (
      <section className="py-10 px-5">
        <div className="max-w-5xl mx-auto">
          {/* Contenedor de las dos secciones */}
          <div className="grid grid-cols-2 gap-20">
            {/* Sección Top Delicias */}
            <div>
              <h2 className="text-xl font-bold text-center text-[25px] mb-5 underline">Top delicias</h2>
              <div className="flex justify-center gap-20">
                {topDelicias.map((item, index) => (
                  <div key={index}>
                    <div className="bg-[#F0A76C] p-5 rounded-xl flex flex-col items-center w-50 shadow-lg shadow-black/30 mt-5" >
                      <img src={item.src} alt={item.nombre} className="w-40 h-40 object-cover rounded-md" />
                    </div>
                    <p className="font-textos text-center text-[15px] mt-5 ">{item.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Sección Recién Salidos del Horno */}
            <div>
              <h2 className="text-xl font-bold text-center text-[25px] mb-5 underline">Recién salidos del horno</h2>
              <div className="flex justify-center gap-20">
                {recientesHorno.map((item, index) => (
                  <div key={index}>
                    <div className="bg-[#D4A574] p-5 rounded-xl flex flex-col items-center w-50 shadow-lg shadow-black/30 mt-5" >
                      <img src={item.src} alt={item.nombre} className="w-40 h-40 object-cover rounded-md" />
                    </div>
                    <p className="font-textos text-center text-[15px] mt-5 text-sm">{item.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Secciones;
  