import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pasabocas = () => {
    const galletas = [
        { src: "/img/galletasal.png", titulo:"Galletas saladas", item1:"", item2:"", item3:"", item4:""},
        { src:"/img/galletaintegral.png", titulo:"Galletas integrales", item1:"", item2:"", item3:"", item4:""}, 
        { src:"/img/galletajonjoli.png", titulo:"Galletas de ajonjolí", item1:"", item2:"", item3:"", item4:""}
    ]

    const volovanes = [
        {src: "/img/volovan1.png", titulo:"Volovanes:", item1:"pollo con champiñones", item2:"jamón y queso", item3:"vegetariano"},
        {src:"/img/volovan2.png", titulo:"Volovanes dulces:", item1:"Fruta", item2:"Crema pastelera", item3:"Mermelada"},  
        {src:"/img/volovan3.png", titulo:"Volovanes del mar:", item1:"Mariscos", item2:"Atún ", item3:""} 
    ]

    const palitosQueso = [
        {src:"/img/empanadas.png", titulo:"Empanadas:", item1:"Pollo", item2:"Jamón y queso", item3:"Hawaiana"},
        {src: "/img/palitoqueso.png", titulo:"Palito de queso frito"},
        {src: "/img/palitoqueso2.png", titulo:"Palito de queso horneado"} 
    ]

    const location = useLocation();

    useEffect(() => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    const normalizeId = (str) =>
     str
        .normalize("NFD")  
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")     
        .replace(/(^-|-$)/g, "");   

    return (
        <div>
            <section className="flex w-auto md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className="px-10 py-30">
                    <h1 className="font-titulos text-[150px]">Pasabocas</h1>
                    <p className="font-textos text-[30px] mt-4">Haz de cualquier momento una delicia con nuestros sabrosos pasabocas, perfectos para compartir.</p>
                </div>
                <img className="w-[1000px] mb-10" src="/img/Empanadabanner.png"/>
            </section>

            <h2 className="flex justify-center font-textos text-[40px] mt-40 mb-20" >Elige a tu gusto</h2>
        
            <section>
                <div>
                    <div>{/* Seccion Galletas*/}
                        <div className="flex items-center gap-5 mb-20">
                            <h2 id={normalizeId("Galletas saladas")} className="font-titulos font-bold text-[50px] px-5" >Galletas saladas</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">
                        
                            {galletas.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12">{item.item1}</li>}
                                        {item.item2 && <li className="font-textos text-[20px] ml-12">{item.item2}</li>}
                                        {item.item3 && <li className="font-textos text-[20px] ml-12">{item.item3}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div> {/* Seccion Cupcakes*/}
                        <div className="flex items-center gap-5 mb-20">
                            <h2 id={normalizeId("Volovanes")} className="font-titulos font-bold text-[50px] px-5">Volovanes</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {volovanes.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12">{item.item1}</li>}
                                        {item.item2 && <li className="font-textos text-[20px] ml-12">{item.item2}</li>}
                                        {item.item3 && <li className="font-textos text-[20px] ml-12">{item.item3}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div> {/* Seccion Brownies y merengues*/}
                        <div className="flex items-center mb-20">
                            <h2 id={normalizeId("Empanadas y palitos de queso")} className="font-titulos font-bold text-[50px] px-5">Empanadas y palitos de queso</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {palitosQueso.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12">{item.item1}</li>}
                                        {item.item2 && <li className="font-textos text-[20px] ml-12">{item.item2}</li>}
                                        {item.item3 && <li className="font-textos text-[20px] ml-12">{item.item3}</li>}
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

export default Pasabocas;