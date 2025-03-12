import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-vino text-white p-4 flex flex-col z-10 ">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <h2 className="text-4xl font-logo ml-10">Caprice</h2>
                    <img src="/2bfd5b66401be85952ea3c25116be1c5-removebg-preview.PNG" alt="Logo de la panadería" className="h-12 w-12" />
                </div>
                <div className="flex flex-col mr-10">
                    <h3 className="text-sm text-center">Siguenos en: </h3>
                    <div className="flex gap-3 mt-2">
                        <a href="https://es-la.facebook.com/login/device-based/regular/login/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} className="hover:text-naranja"/></a>
                        <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="hover:text-naranja"/></a>
                        <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} className="hover:text-naranja"/></a>
                        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} className="hover:text-naranja"/></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full h-[2px] bg-white my-4"></div>
                <p className="text-sm text-center">© Desarrollado por Camila Quintero y Melisa Ariza 2025 </p>
            </div>
            
        </footer>
    )
}

export default Footer;