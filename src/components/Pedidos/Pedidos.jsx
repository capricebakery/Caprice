
const Pedidos = () => {
    return (
        <section id="Pedido" className="flex items-center justify-center w-auto h-138 mx-30 my-40 px-40  bg-[#B8AB74] rounded-[80px] shadow-lg overflow-visible">
            <div className="w-auto mx-5 grid grid-cols-2 gap-50">
                {/* img galleta  */}
                <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-120 w-120">
                    <img className="w-90 h-auto scale-95 hover:scale-120" src="/img/galleta.png" alt="Galleta"/>
                </div>
                {/* info */}
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-titulos font-bold text-[45px] mb-10">Haz tu pedido aquí:</h2>
                    <ul className="font-textos text-[14px] flex flex-col gap-7">
                         <li className="flex w-auto h-9 gap-7 items-center"><img src="/img/icon-whatsapp.png" alt="Iconon Whatsapp"/>329-911-3888</li>
                         <li className="flex w-auto h-9 gap-7 items-center"><img src="/img/icon-casa.png" alt="Iconon casa"/>Cra 127 D 89 - 23</li>
                         <li className="flex w-50 h-8 gap-7 items-center"><img src="/img/icon-reloj.png" alt="Iconon reloj"/>7:00 am - 10:00 pm</li>
                     </ul>
                </div>
            </div>
         </section>
    )
}

export default Pedidos;