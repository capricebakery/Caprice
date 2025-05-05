import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [adicionalesOpen, setAdicionalesOpen]=useState(false);
    const navigate = useNavigate();

    return (

            <div id="Menu" className="relative flex flex-col justify-center items-center py-3">
                <button onClick={() => setMenuOpen(!menuOpen)} className=" bg-vino text-white w-40 py-3 rounded-lg font-textos hover:bg-naranja">
                    MENÚ
                </button>

                {menuOpen && (
                <div className="mt-5 mx-5 w-auto bg-[url(/img/fondo_menu.png)] bg-no-repeat bg-cover bg-left shadow-lg rounded-[6rem] p-10 grid grid-cols-2 gap-10 pr-30">
                    <div></div> {/* Columna vacía a la izquierda */}

                    <div className="space-y-6">
                        {/* Sección de Desayunos */}
                        <div className="flex items-center justify-between pb-2">
                            <div>
                                <button onClick={() => navigate("/desayunos")}>
                                    <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Desayunos</h2>
                                </button>
                                <ul className="list-disc ml-5">
                                    <li className="text-[20px]">Ejecutivo</li>
                                    <li className="text-[20px]">Escolar</li>
                                    <li className="text-[20px]">Especial</li>
                                </ul>
                            </div>
                            <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                <img src="/img/desayunos.png" className="w-45 h-45 " alt="Desayunos" />
                            </div>
                        </div>

                        {/* Sección de Pasteles y tortas */}
                        <div className="flex items-center gap-5 justify-between pb-2">
                            <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                <img src="/img/pasteles.png" className="w-45 h-55" alt="Pasteles y tortas" />
                            </div>
                            <div>
                                <button onClick={() => navigate("/Pasteles")}>
                                    <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Pasteles y tortas</h2>
                                </button>
                                <ul className="list-disc ml-5">
                                    <li className="text-[20px]">Cumpleaños</li>
                                    <li className="text-[20px]">Personalizadas</li>
                                    <li className="text-[20px]">Pies</li>
                                    <li className="text-[20px]">Cheescakes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sección de Panaderia */}
                        <div className="flex items-center justify-between pb-2">
                            <div>
                                <button onClick={() => navigate("/Panaderia")}>
                                    <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Panaderia</h2>
                                </button>
                                <ul className="list-disc ml-5">
                                    <li className="text-[20px]">Hojaldres</li>
                                    <li className="text-[20px]">Dulces</li>
                                    <li className="text-[20px]">Granos</li>
                                    <li className="text-[20px]">Integrales</li>
                                </ul>
                            </div>
                            <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                <img src="/img/panaderia.png" className="w-45 h-60" alt="Panaderia" />
                            </div>
                        </div>

                        {/* Sección de Postres */}
                        <div className="flex gap-5 pb-2">
                            <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                <img src="/img/postres.png" className="w-40 h-60 " alt="Postres" />
                            </div>
                            <div className="flex flex-col ">
                                <button onClick={() => navigate("/Postres")}>
                                    <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Postres</h2>
                                </button>
                                <ul className="list-disc ml-5">
                                    <li className="text-[20px]">Galletas</li>
                                    <li className="text-[20px]">Cupcakes</li>
                                    <li className="text-[20px]">Brownies</li>
                                    <li className="text-[20px]">Merengues</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sección de Pasabocas */}
                        <div className="flex items-center justify-between pb-2">
                            <div>
                                <button onClick={() => navigate("/Pasabocas")}>
                                    <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Pasabocas</h2>
                                </button>
                                <ul className="list-disc ml-5">
                                    <li className="text-[20px]">Galletas saladas</li>
                                    <li className="text-[20px]">Bolovanes</li>
                                    <li className="text-[20px]">Palitos de queso</li>
                                    <li className="text-[20px]">Empanadas</li>
                                </ul>
                            </div>
                            <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                <img src="/img/pasabocas.png" className="w-45 h-auto" alt="Panaderia" />
                            </div>
                        </div>

                        <div>
                            <button onClick={() => setAdicionalesOpen(!adicionalesOpen)}className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">
                                Adicionales
                            </button>

                            {adicionalesOpen && (
                            <div>
                                {/* Sección de Pizza */}
                                <div className="flex items-center gap-5 pb-2">
                                    <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                        <img src="/img/pizza.png" className="w-43 h-auto " alt="adicionales" />
                                    </div>
                                    <div>
                                        <button onClick={() => navigate("/Adicionales")}>
                                            <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Pizza</h2>
                                        </button>
                                        <ul className="list-disc ml-5">
                                            <li className="text-[20px]">Pepperoni</li>
                                            <li className="text-[20px]">Hawaiana</li>
                                            <li className="text-[20px]">Pollo con champiñones</li>
                                            <li className="text-[20px]">Italiana</li>
                                            <li className="text-[20px]">Vegetariana</li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                {/* Sección de Lasagna */}
                                <div className="flex items-center justify-between pb-2">
                                    <div>
                                        <button onClick={() => navigate("/Adicionales")}>
                                            <h2 className="font-textos text-[35px] border-b mb-8 text-vino hover:text-naranja">Lasagna</h2>
                                        </button>
                                        <ul className="list-disc ml-5"> 
                                            <li className="text-[20px]">Boloñesa</li>
                                            <li className="text-[20px]">Atún</li>
                                            <li className="text-[20px]">Pollo</li>
                                            <li className="text-[20px]">Carne</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#EBEBEB] flex justify-center items-center rounded-full shadow-md shadow-black/35 h-60 w-60">
                                        <img src="/img/lasagna.png" className="w-45 h-auto" alt="adicionales" />
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

};

export default Menu;
