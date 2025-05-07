const Panaderia = () => {
    const Hojaldres = [
        {
            src:"/img/rollo.png",
            title:"Pan Hojaldrado"
        },
        {
            src:"/img/corazon.png",
            title:"Corazones"
        },
        {
            src: "/img/pastel de pollo.png",
            title: "Pastel de Pollo"
        }
    ]

    const Dulces = [
        {
            src:"/img/pan de uvas.png",
            title:"Pan de Uvas pasas"
            
        },
        {
            src:"/img/roscon.png",
            title:"Roscones"
        },
        {
            src:"/img/churro.png",
            title:"Churros rellenos" 
        }
    ]

    const GranosEIntegrales = [
        {
            src:"/img/mogolla.png",
            title:"Mogolla Integral"
        },
        {
            src:"/img/pan 7 granos.png",
            title:"Pan de 7 granos"
        },
        {
            src:"/img/pan de maiz.png",
            title:"Pan de maíz" 
        }
    ]

    return(
        <div>
            <section className=" relative w-auto flex md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className=" px-10">
                    <h1 className="font-titulos text-[100px]">Panadería</h1>
                    <p className="font-textos text-[30px] mt-4">Déjate consentir desde la mañana con el toque artesanal de nuestros panes frescos.</p>
                </div>
                <img className="w-[800px]" src="/img/pagepanaderia.png" alt="panes"/>
            </section>
            <h2 className="flex justify-center font-textos text-[40px] mt-40 mb-20">Elige a tu gusto</h2>
            <section>
                <div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5">Hojaldres</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Hojaldres.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[50px] shadow-lg shadow-black/50" src={item.src} alt={item.title}/>
                                    <h3 className="font-titulos text-[35px] mt-5">{item.title}</h3>
                                    <ul className="list-disc ml-10 font-textos text-[20px]">
                                        {item.pot1 && <li>{item.pot1}</li>}
                                        {item.pot2 && <li>{item.pot2}</li>}
                                        {item.pot3 && <li>{item.pot3}</li>}
                                        {item.pot4 && <li>{item.pot4}</li>}
                                    </ul>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5">Dulces</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Dulces.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[50px] shadow-lg shadow-black/50" src={item.src} alt={item.title}/>
                                    <h3 className="font-titulos text-[35px] mt-5">{item.title}</h3>
                                    <ul className="list-disc ml-10 font-textos text-[20px]">
                                        {item.pot1 && <li>{item.pot1}</li>}
                                        {item.pot2 && <li>{item.pot2}</li>}
                                        {item.pot3 && <li>{item.pot3}</li>}
                                        {item.pot4 && <li>{item.pot4}</li>}
                                    </ul>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5">Granos e Integrales</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {GranosEIntegrales.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[50px] shadow-lg shadow-black/50" src={item.src} alt={item.title}/>
                                    <h3 className="font-titulos text-[35px] mt-5">{item.title}</h3>
                                    <ul className="list-disc ml-10 font-textos text-[20px]">
                                        {item.pot1 && <li>{item.pot1}</li>}
                                        {item.pot2 && <li>{item.pot2}</li>}
                                        {item.pot3 && <li>{item.pot3}</li>}
                                        {item.pot4 && <li>{item.pot4}</li>}
                                    </ul>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Panaderia;