
const Pedidos = () => {
    return (
        <section id="Pedido" className="flex justify-center w-auto mx-auto my-20 px-40">
            <div className="w-auto mx-5 grid grid-cols-2 gap-50">
                {/* img galleta  */}
                <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-100 w-100">
                    <img className="w-70 h-70 scale-95 hover:scale-120" src="/img/galleta.png" alt="Galleta"/>
                </div>
                {/* info */}
                <div className="flex flex-col justify-center">
                    <h2 className="font-textos font-bold text-[45px] mb-10">Haz tu pedido aqui:</h2>
                    <ul className="font-textos text-[20px] flex flex-col gap-7">
                         <li className="flex gap-7"><img src="/img/icon-whatsapp.png" alt="Iconon Whatsapp"/>329-911-3888</li>
                         <li className="flex gap-7"><img src="/img/icon-casa.png" alt="Iconon Whatsapp"/>Cra 127 D 89 - 23</li>
                         <li className="flex gap-7"><img src="/img/icon-reloj.png" alt="Iconon Whatsapp"/>7:00 am - 10:00 pm</li>
                     </ul>
                </div>
            </div>
         </section>
    )

}

export default Pedidos;