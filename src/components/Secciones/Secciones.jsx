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
      <section className="mt-20 py-10 px-5">
        <div className="">
          {/* Contenedor de las dos secciones */}
          <div className="grid grid-cols-2">
            {/* Sección Top Delicias */}
            <div>
              <h2 className="text-xl font-titulos font-bold text-center text-[40px] mb-10">Top delicias</h2>
              <div className="flex justify-center gap-30">
                {topDelicias.map((item, index) => (
                  <div key={index}>
                    <div className=" p-5 rounded-xl flex flex-col items-center w-60 shadow-lg shadow-black/30 mt-5" >
                      <img src={item.src} alt={item.nombre} className="w-50 h-50 object-cover rounded-md" />
                    </div>
                    <p className="font-textos text-center text-[15px] mt-5 ">{item.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Sección Recién Salidos del Horno */}
            <div>
              <h2 className="text-xl font-titulos font-bold text-center text-[40px] mb-10">Recién salidos del horno</h2>
              <div className="flex justify-center gap-30">
                {recientesHorno.map((item, index) => (
                  <div key={index}>
                    <div className=" p-5 rounded-xl flex flex-col items-center w-60 shadow-lg shadow-black/30 mt-5" >
                      <img src={item.src} alt={item.nombre} className="w-50 h-50 object-cover rounded-md" />
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
  