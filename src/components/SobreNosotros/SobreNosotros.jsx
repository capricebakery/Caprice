import { motion } from "framer-motion";

const SobreNosotros = () => {
return (
    <section id="SobreNosotros"  className="w-auto flex md:flex-row flex-col items-center h-138 bg-linear-to-t from-[#F4E1C1] to-[#f7f2dc]
                        mx-30 my-40 px-40 rounded-[80px] shadow-lg overflow-visible">
        <motion.img
          src="/img/chef.png" 
          alt="Chef" 
          className="mb-22 w-[450px] max-w-none"
          style={{ transform: "translateX(-70%)" }}
          initial={{ opacity: 0, x: -100 }}  // Comienza invisible y desplazado a la izquierda
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}      // Duración de 1 segundo
        />
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-5">

        {/* Contenido animado */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}  // Comienza invisible y más abajo
          whileInView={{ opacity: 1, x: 0 }}  // Aparece y sube suavemente
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} // Se retrasa un poco para mejor efecto
        >
          <h2 className="text-[55px] font-bold font-titulos mb-7">Sobre nosotros</h2>
          <p className="text-gray-700 text-[20px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tellus nisl,
            id elementum nunc vulputate a. Donec id justo consectetur, eleifend odio molestie,
            interdum arcu. Nullam porta iaculis vulputate. Praesent sagittis gravida felis,
            ullamcorper imperdiet velit dapibus ac. Praesent sed porttitor lacus, ut molestie leo.
            Integer sodales semper posuere. Vestibulum a ante ullamcorper elit porta sagittis non
            ac elit.
          </p>
          </motion.div>
          
          <motion.img 
            src="/img/firma.png" 
            alt="Firma" 
            className="w-60"
            initial={{ opacity: 0, scale: 0.8 }}  // Aparece más pequeño y con opacidad baja
            whileInView={{ opacity: 1, scale: 1 }}    // Se agranda suavemente
            transition={{ duration: 0.5, delay: 0.8 }} // Retraso para mejor efecto
          />

        </div>
    </section>
)

};

export default SobreNosotros;