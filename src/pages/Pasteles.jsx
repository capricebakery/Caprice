import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pasteles = () => {
    const Cumpleaños = [
        {
            src:"/img/cumple1.png",
            title:"Pastel de flores",
            pot1:"Cubierta de crema",
            pot2:"Tres leches",
            pot3:"Relleno de duraznos",
            pot4:""
        },
        {
            src:"/img/cumple3.png",
            title:"Pastel Hombre araña",
            pot1:"Cubierta de Fondant",
            pot2:"Ponque",
            pot3:"Relleno de chocolate",
            pot4:""
        },
        {
            src: "/img/cumple2.png",
            title: "Pastel Pokemon",
            pot1: "Cubierta de Fondant",
            pot2:"Ponque",
            pot3:"Relleno de fresas",
            pot4:""
        }
    ]

    const PiesYCheesecakes = [
        {
            src:"/img/pie1.png",
            title:"Pie de Frambuesa",
            pot1:"Manzana",
            pot2:"Naranja",
            pot3:"Frutos rojos"
        },
        {
            src:"/img/pie2.png",
            title:"Cheesecake de Limon",
            pot1:"Crema batida",
            pot2:"Base de galleta",
            pot3:"Rodajas de Limon" 
        },
        {
            src:"/img/pie3.png",
            title:"Cheesecake de Frutos rojos",
            pot1:"Frutas",
            pot2:"Base de galleta",
            pot3:"Crema batida"  
        }
    ]

    const Personalizadas = [
        {
            src:"/img/pastel1.png",
            title:"Pastel de Totoro",
            pot1:"Cubierta de crema",
            pot2:"Muñequitos",
            pot3:"Relleno al gusto",
            pot4: "Tres leches" 
        },
        {
            src:"/img/pastel2.png",
            title:"Pastel de Capibara",
            pot1:"Cubierta de crema",
            pot2:"Muñequitos",
            pot3:"Relleno al gusto",
            pot4: "Tres leches" 
        },
        {
            src:"/img/pastel 3.png",
            title:"Pastel de Ferrero Roche",
            pot1:"Ponque choclate",
            pot2:"Relleno de fresas",
            pot3:"Cubierta de Kit kat",
            pot4: "Crema de chocolate"  
        }
    ]

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
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

    return(
        <div>
            <section className=" relative w-auto flex md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className=" px-10 py-30 w-250">
                    <h1 className="font-titulos text-[150px] leading-none">Pasteles y Tortas</h1>
                    <p className="font-textos text-[30px] mt-4">La mejor manera de endulzar tu día es con una de nuestras deliciosas tortas y pasteles.</p>
                </div>
                <img className=" w-[700px]" src="/img/pagepasteles.png" alt="pasteles"/>
            </section>
            <h2 className="flex justify-center font-textos text-[40px] mt-40 mb-20">Elige a tu gusto</h2>
            <section>
                <div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 id={normalizeId("Cumpleaños")} className="font-titulos font-bold text-[50px] px-5">Cumpleaños</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Cumpleaños.map((item,index) => (
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
                            <h2 id={normalizeId("Pies y Cheesecakes")} className="font-titulos font-bold text-[50px] px-5">Pies y Cheesecakes</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {PiesYCheesecakes.map((item,index) => (
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
                            <h2 id={normalizeId("Personalizadas")} className="font-titulos font-bold text-[50px] px-5">Personalizadas</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Personalizadas.map((item,index) => (
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

export default Pasteles;