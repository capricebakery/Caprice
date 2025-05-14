import { link } from "framer-motion/client";

const photos = [
    {
        src:"/img/ejecutivo1.png",
        link:"https://www.instagram.com/accounts/login/"
    },
    {
        src:"/img/pie1.png",
        link:"https://www.instagram.com/accounts/login/"
    },
    {
        src:"/img/rollo.png",
        link:"https://www.instagram.com/accounts/login/"
    },
    {
        src:"/img/corazon.png",
        link:"https://www.instagram.com/accounts/login/"
    },
    {
        src:"img/pastel 3.png",
        link:"https://www.instagram.com/accounts/login/"
    },
    {
        src:"/img/pan 7 granos.png",
        link:"https://www.instagram.com/accounts/login/"
    }
]

const Instagram = () => {
    return (
        <section id="Instagram">
            <div>
                <div className="flex flex-col items-center font-titulos text-5xl gap-7">
                    <h2>Síguenos en Instagram</h2>
                    <a href="https://www.instagram.com/accounts/login/">@Caprice</a>
                </div>
                <div className="grid grid-cols-3 gap-8 px-8 py-30">
                    {photos.map((item,index) => (
                        <div className="relative  overflow-hidden rounded-[4vw]" key={index}>
                            <a className=" " href={item.link} target="_blank">
                                <img className="w-200 " src={item.src}/>
                            </a>
                            <div className="absolute flex flex-col gap-3 items-center justify-center inset-0 bg-black opacity-0 hover:opacity-62 transition-opacity duration-300">
                                <img className="w-8" src="/img/instagram.png"/>
                                <h3 className="text-white font-textos font-bold">Ver aquí</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Instagram;