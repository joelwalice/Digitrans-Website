import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Flogo from '../components/flogo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={'min-h-[60px]'}>
        <div className={'grid sm:grid-cols-1 md:grid-cols-3 p-4 pr-4 bg-blue-900 text-white'}>
            <div className={'hidden md:flex items-center text-white text-md'}>
            <Image width={10000} height={10000} src={Flogo} alt="Logo" className={'w-[100px] h-21'}/>
            </div>
            <div className={'pt-4 flex justify-center items-center text-white text-xl md:hidden'}>
                <Image width={100000} height={1000000} src={Flogo} alt="Logo" className={'w-20 h-20'}/>
            </div>
            <div className={'hidden md:flex justify-center items-center text-white'}>Digitrans Services © 2023 All Rights Reserved</div>
            <div>
            <div className={'hidden md:flex relative bottom-0 float-right items-center'}>
                <div className="flex pb-10 mt-8 gap-4 text-white">
                    <Link className="text-white text-xl" target='_blank' href="https://wa.me/+919952037361" aria-label="Facebook">
                        <FaWhatsapp size={30}/>
                    </Link>
                    <Link className="text-white text-xl" target='_blank' href="https://instagram.com/digitrans_services?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" aria-label="Instagram">
                        <FaInstagram size={30}/>
                    </Link>
                    <Link className="text-white text-xl" target='_blank' href="https://www.linkedin.com/company/digitrans-services/" aria-label="LinkedIn">
                        <FaLinkedin size={30}/>
                    </Link>
                </div>
                </div>
            </div>
            <div className={'flex items-center justify-center md:hidden'}>
                <div className="flex pb-10 mt-8 gap-4 text-white">
                    <Link className="text-white text-xl" href="https://wa.me/+919952037361" aria-label="Facebook">
                        <FaWhatsapp size={30}/>
                    </Link>
                    <Link className="text-white text-xl" href="https://instagram.com/digitrans_services?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" aria-label="Instagram">
                        <FaInstagram size={30}/>
                    </Link>
                    <Link className="text-white text-xl" href="https://www.linkedin.com/company/digitrans-services/" aria-label="LinkedIn">
                        <FaLinkedin size={30}/>
                    </Link>
                </div>
                </div>
            <div className={'flex items-center justify-center text-white text-sm md:hidden'}>Digitrans Services © 2023 All Rights Reserved</div>
        <div></div>
            <h1 className={'flex justify-center items-center'}>Developed by Joel W</h1>
        </div>
        </div>
    )
}
export default Footer
