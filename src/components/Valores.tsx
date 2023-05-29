'use client'
import React, { useRef} from 'react';
import comunidad from '@/assets/valores_comunidad.svg'
import colaboracion from '@/assets/colaboracion.svg'
import innovacion from '@/assets/innovacion.svg'
import Image from "next/image";
import {motion, useInView} from "framer-motion";

const containerEfeccts = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}
const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {duration:1}
    },

}




const Valores = () => {

    const divRef = useRef(null)

    const isInView = useInView(divRef)

    return (
        <>
            <div className='bg-yellow_arti sm:px-14 py-28 text-black_arti flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center py-8 font-bold'>Nuestros valores</h1>
                <motion.div
                    ref={divRef}
                    variants={containerEfeccts}
                    initial='hidden'
                    animate={isInView?'show':'hidden'}
                    className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4 '>

                    <motion.div
                        variants={item}
                        className='p-8  shadow-2xl drop-shadow-lg rounded-md   text-center  font-semibold flex flex-col items-center justify-center'>
                        <Image src={comunidad} height={24} width={24} alt='comunidad' className='h-24 w-24'/>
                        <h2 className='font-bold text-xl py-4 uppercase'>
                            Apoyo a la comunidad artística
                        </h2>
                        <p className='text-left'>
                            Brindando una plataforma para que los artistas puedan conectarse entre sí y colaborar en
                            proyectos creativos
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className='p-8  shadow-2xl drop-shadow-lg rounded-md  text-center font-semibold flex flex-col items-center justify-center'>
                        <Image src={innovacion} height={24} width={24} alt='innovacion' className='h-24 w-24'/>
                        <h2 className='font-bold text-xl py-4 uppercase'>
                            Innovación y
                            creatividad
                        </h2>
                        <p className='text-left'>
                            Colaborando en la organización de eventos, talleres y exposiciones
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className='p-8  shadow-2xl drop-shadow-lg  rounded-md text-center font-semibold flex flex-col items-center justify-center'>
                        <Image src={colaboracion} height={24} width={24} alt='colaboración' className='h-24 w-24'/>
                        <h2 className='font-bold text-xl py-4 uppercase'>
                            Colaboración
                            y trabajo en
                            equipo
                        </h2>
                        <p className='text-left'>
                            Trabajando artistas miembros, curadores, críticos y otros profesionales para lograr los mejores resultados posibles
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </>

    );
};

export default Valores;