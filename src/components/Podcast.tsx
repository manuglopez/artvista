'use client'
import {motion, useInView} from "framer-motion";
import {useRef} from "react";


const Podcast = () => {
    const container = useRef(null)


    const isInView = useInView(container)

    return (
        <div ref={container}
             className="flex items-center justify-center sm:px-28 bg-blue_arti py-36 ">
            <motion.iframe
                title='podcast semanal'
                initial={{opacity: 0, x: -1000}}
                animate={{opacity: isInView ? 1 : 0, x: 0}}
                transition={{duration: 1.5}}
                allowFullScreen={true} height={200} className="w-full px-16"
                src="https://www.ivoox.com/player_ej_108788012_6_1.html?c1=495ba2" loading="lazy"></motion.iframe>

        </div>
    );
};

export default Podcast;