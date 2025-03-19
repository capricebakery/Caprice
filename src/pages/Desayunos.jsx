
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

    return(
        <div>
            <section className=" relative w-auto flex md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className=" px-10">
                    <h1 className="font-titulos text-[100px]">Desayunos</h1>
                    <p className="font-titulos text-[30px] mt-4 max-w-md">La mejor manera de inciar el dia es digustando uno de nuestros desayunos Caprice</p>
                </div>
                <img className="absolute top-0 right-0 transform translate-x-20 -translate-y-10 w-[680px]" src="/img/pagedesayunos.png" alt="desayunos"/>
            </section>
            <h2 className="flex justify-center font-titulos text-[30px] mt-40 mb-20">Elije a tu gusto</h2>
            <section>
                <div>
                    <div>
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos text-[50px] px-5">Ejecutivo</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Ejecutivo.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[40px] shadow-2xl" src={item.src} alt={item.title}/>
                                    <h3 className="font-textos text-[35px] mt-5">{item.title}</h3>
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
                            <h2 className="font-titulos text-[50px] px-5">Escolar</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Escolar.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[40px] shadow-2xl" src={item.src} alt={item.title}/>
                                    <h3 className="font-textos text-[35px] mt-5">{item.title}</h3>
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
                            <h2 className="font-titulos text-[50px] px-5">Especial</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4 "></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-20">
                            {Especial.map((item,index) => (
                                <div key={index} className="ml-20 flex flex-col justify-between gap-5">
                                    <img className="w-[300px] hover:scale-120 rounded-[40px] shadow-2xl" src={item.src} alt={item.title}/>
                                    <h3 className="font-textos text-[35px] mt-5">{item.title}</h3>
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