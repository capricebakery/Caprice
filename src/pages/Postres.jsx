const Postres = () => {
    const galletas = [
        { src: "/img/galletas1.png", titulo:"Galletas:", item1:"Choco chips", item2:"Chocolate", item3:"Vainilla", item4:"Avena"},
        { src:"/img/galletas2.png", titulo:"Galletas:", item1:"Herradura", item2:"Rizada", item3:"Grajeas", item4:"3 ojos"}, 
        { src:"/img/galletas3.png", titulo:"Personalizadas:", item1:"Personajes", item2:"Figuras", item3:"Eventos especiales", item4:""}
    ]

    const cupcakes = [
        {src: "/img/cupcakes1.png", titulo:"Cupcakes:", item1:"Chocolate", item2:"Vainilla", item3:"Fresa"},
        {src:"/img/cupcakes2.png", titulo:"Cupcakes", item1:"Limón", item2:"Mandarina", item3:"Mora"},  
        {src:"/img/cupcakes3.png", titulo:"Personalizados", item1:"", item2:"", item3:""} 
    ]

    const browniesMerengues = [
        { src: "/img/brownie1.png", titulo:"Brownie sencillo"},
        {src: "/img/brownie2.png", titulo:"Brownies", item1:"Relleno", item2:"Cubiertas", item3:"Personalizados"},  
        {src:"/img/merengue.png", titulo:"Merengues", item1:"Italiano",item2:"Francés", item3:"Suizo"} 
    ]
    return (
        <div>
            <section className="flex w-auto md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 rounded-[80px] shadow-lg overflow-visible">
                <div className="px-10 py-30">
                    <h1 className="font-titulos text-[150px]">Postres</h1>
                    <p className="font-textos text-[30px] mt-4">Endulza tu día desde el primer bocado con nuestros irresistibles postres caseros.</p>
                </div>
                <img className="w-[650px]" src="/img/pagepostres.png"/>
            </section>

            <h2 className="flex justify-center font-textos text-[40px] mt-40 mb-20" >Elige a tu gusto</h2>
        
            <section>
                <div>
                    <div>{/* Seccion Galletas*/}
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5" >Galletas</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">
                        
                            {galletas.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12 mt-8">{item.item1}</li>}
                                        {item.item2 && <li className="font-textos text-[20px] ml-12">{item.item2}</li>}
                                        {item.item3 && <li className="font-textos text-[20px] ml-12">{item.item3}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div> {/* Seccion Cupcakes*/}
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5">Cupcakes</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {cupcakes.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12 mt-8">{item.item1}</li>}
                                        {item.item2 && <li className="font-textos text-[20px] ml-12">{item.item2}</li>}
                                        {item.item3 && <li className="font-textos text-[20px] ml-12">{item.item3}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div> {/* Seccion Brownies y merengues*/}
                        <div className="flex items-center mb-20">
                            <h2 className="font-titulos font-bold text-[50px] px-5">Brownies y merengues</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {browniesMerengues.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-titulos text-[35px] mt-5">{item.titulo}
                                        {item.item1 && <li className="font-textos text-[20px] ml-12 mt-8">{item.item1}</li>}
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

export default Postres;