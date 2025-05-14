import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Desayunos = () => {
    const Ejecutivo = [
        {
            src:"/img/ejecutivo3.png",
            title:"Sandwiches",
            pot1:"Pollo",
            pot2:"Jamon y queso",
            pot3:"Vegetariano",
            pot4:""
        },
        {
            src:"/img/ejecutivo1.png",
            title:"Mini Hamburguesas",
            pot1:"Huevo",
            pot2:"Jamon",
            pot3:"Carne",
            pot4:"Salchicha"
        },
        {
            src: "/img/ejecutivo2.png",
            title: "Pasteles",
            pot1: "Carne",
            pot2:"Pollo",
            pot3:"Jamon y queso",
            pot4:""
        }
    ]

    const Escolar = [
        {
            src:"/img/combo1.png",
            title:"Combo 1:",
            pot1:"Sandwich jamon y queso",
            pot2:"Muffin",
            pot3:"Fruta"
        },
        {
            src:"/img/combo2.png",
            title:"Combo 2:",
            pot1:"Fruta",
            pot2:"Yogurt griego con cereal",
            pot3:"Hamburguesa" 
        },
        {
            src:"/img/combo3.png",
            title:"Combo 3:",
            pot1:"Fruta",
            pot2:"Muffin de queso",
            pot3:"Sandwich jamon y queso"  
        }
    ]

    const Especial = [
        {
            src:"/img/especial1.png",
            title:"Dia de la Madre",
            pot1:"Torta de chocolate",
            pot2:"Fruta",
            pot3:"Pan",
            pot4: "Globo y flores" 
        },
        {
            src:"/img/especial2.png",
            title:"Cumpleaños",
            pot1:"Torta tres leches",
            pot2:"Fruta",
            pot3:"Cerveza",
            pot4: "Decoraciones" 
        },
        {
            src:"/img/especial3.png",
            title:"Aniversarios",
            pot1:"Jugos",
            pot2:"Fruta",
            pot3:"Panes",
            pot4: "Globo y flores"  
        }
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
        .normalize("NFD")                     // elimina tildes
        .replace(/[\u0300-\u036f]/g, "")     // regex para tildes
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")         // reemplaza espacios y símbolos por guiones
        .replace(/(^-|-$)/g, "");            // remueve guiones al inicio o final


    return(
        <div>
            <section className=" relative w-auto flex md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className="px-10 py-30">
                    <h1 className="font-titulos text-[150px]">Desayunos</h1>
                    <p className="font-textos text-[30px] mt-4 ">La mejor manera de inciar el día es degustando uno de nuestros desayunos Caprice</p>
                </div>
                <img className="pt-25 w-[800px]" src="/img/pagedesayunos.png" alt="desayunos"/>
            </section>
            <h2 className="flex justify-center font-textos text-[40px] mt-40 mb-20">Elige a tu gusto</h2>
            <section>
                <div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 id={normalizeId("Ejecutivo")} className="font-titulos font-bold text-[50px] px-5">Ejecutivo</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Ejecutivo.map((item,index) => (
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
                            <h2 id={normalizeId("Escolar")} className="font-titulos font-bold text-[50px] px-5">Escolar</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Escolar.map((item,index) => (
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
                            <h2 id={normalizeId("Especial")} className="font-titulos font-bold text-[50px] px-5">Especial</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Especial.map((item,index) => (
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

export default Desayunos;