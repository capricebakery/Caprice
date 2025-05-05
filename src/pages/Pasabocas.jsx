const Pasabocas = () => {
    const galletas = [
        { src: "/img/galletasal.png", titulo:"Galletas saladas", item1:"", item2:"", item3:"", item4:""},
        { src:"/img/galletaintegral.png", titulo:"Galletas integrales", item1:"", item2:"", item3:"", item4:""}, 
        { src:"/img/galletajonjoli.png", titulo:"Galletas de ajonjoli", item1:"", item2:"", item3:"", item4:""}
    ]

    const volovanes = [
        {src: "/img/volovan1.png", titulo:"Volovanes:", item1:"pollo con champiñones", item2:"jamon y queso", item3:"vegetariano"},
        {src:"/img/volovan2.png", titulo:"Volovanes dulces:", item1:"Fruta", item2:"Crema pastelera", item3:"Mermelada"},  
        {src:"/img/volovan3.png", titulo:"Volovanes del mar:", item1:"Mariscos", item2:"Atun ", item3:""} 
    ]

    const palitosQueso = [
        {src:"/img/empanadas.png", titulo:"Empanadas:", item1:"Pollo", item2:"Jamon y queso", item3:"Hawaiana"},
        {src: "/img/palitoqueso.png", titulo:"Palito de queso frito"},
        {src: "/img/palitoqueso2.png", titulo:"Palito de queso horneado"} 
    ]
    return (
        <div>
            <section className="flex w-auto md:flex-row flex-col items-center h-150 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        m-20 px-40 rounded-[80px] shadow-lg overflow-visible">
                <div>
                    <h1 className="font-titulos text-[100px] mb-10">Pasabocas</h1>
                    <p className="font-titulos text-[30px]">Haz de cualquier momento una delicia con nuestros sabrosos pasabocas, perfectos para compartir.</p>
                </div>
                <img className="w-[900px] mb-10" src="/img/Empanadabanner.png"/>
            </section>

            <h2 className="flex justify-center font-titulos text-[30px] mt-40 mb-20" >Elige a tu gusto</h2>
        
            <section>
                <div>
                    <div>{/* Seccion Galletas*/}
                        <div className="flex items-center gap-5 mb-20">
                            <h2 className="font-titulos text-[50px] px-5" >Galletas saladas</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">
                        
                            {galletas.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-textos text-[35px] mt-5">{item.titulo}
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
                            <h2 className="font-titulos text-[50px] px-5">Volovanes</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {volovanes.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-textos text-[35px] mt-5">{item.titulo}
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
                            <h2 className="font-titulos text-[50px] px-5">Empanadas y palitos de queso</h2>
                            <div className="w-full h-[2px] bg-gray-500 my-4"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-20">

                            {palitosQueso.map((item, index) => (
                                <div className="flex flex-col ml-20 gap-5" key={index}>
                                    <div>
                                        <img className="w-[300px] hover:scale-120 shadow-lg shadow-black/50 rounded-[50px]" src={item.src} alt={item.titulo} />
                                    </div>
                                    <ul className="list-disc font-textos text-[35px] mt-5">{item.titulo}
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