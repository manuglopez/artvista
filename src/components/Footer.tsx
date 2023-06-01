import React from 'react';
import {BsInstagram, BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className='h-24 bg-black_arti text-slate-300 text-center flex content-center items-center justify-center'>
            <div className='px-7 text-xl '>
                <Link href='https://twitter.com/ArtivistaRev '>
                    <BsTwitter className='w-10 h-10 text-white hover:text-yellow_arti '/>
                </Link>
            </div>
            <div className='px-7 text-xl '>
                <Link href='https://www.facebook.com/profile.php?id=100092671120268 '>
                    <FaFacebookF className='w-10 h-10 text-white hover:text-yellow_arti '/>
                </Link>
            </div>
            <div className='px-7 text-xl '>
                <Link href='https://www.instagram.com/artivistarev/'>
                    <BsInstagram className='w-10 h-10 text-white hover:text-yellow_arti '/>
                </Link>
            </div>

        </div>
    );
};

export default Footer;