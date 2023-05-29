'use client'
import Image from "next/image";
import portada from '@/assets/portada.png'
import { motion } from "framer-motion"
import Link from "next/link";

const Revista = () => {
    return (
        <div className='grid grid-cols-1 py-8  gap-3 sm:grid-cols-2 '>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                animate={{ opacity: 1, scale: 1, rotate:-8, y:70, x:100}}
                transition={{ duration: 0.5 }}
                className='flex px-16 content-center justify-center hidden  sm:block'>
                <Image className=' drop-shadow-xl shadow-2xl shadow-slate-700'
                       priority={true}
                       width='501'
                       height='1008'
                       src={portada} alt='Revista zero'
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.2, rotate:0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.5 }}
                className='flex px-16 content-center justify-center sm:hidden'>
                <Image className='drop-shadow-xl shadow-2xl shadow-slate-700'
                       priority={true}
                       width='501'
                       height='1008'
                       src={portada} alt='Revista zero'
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x:100 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ duration:1 }}
                className='sm:px-16 flex flex-col content-center justify-items-start text-center'>
                <h1 className='font-black text-5xl sm:text-7xl py-20'>NÚMERO ACTUAL</h1>
                <h2 className='font-extralight text-3xl pb-20'>Ilustraciones, humor y nuevas <br
                    className='hidden'/> formas de narrar historias de
                    vida</h2>
                <Link  className='bg-black_arti text-yellow_arti py-5 px-10 mx-auto max-w-4xl rounded text-xl text-bold ' href="/revista">Leer aqui</Link>

            </motion.div>

        </div>
    );
};

export default Revista;