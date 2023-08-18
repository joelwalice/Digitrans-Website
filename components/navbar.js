import React,{useState} from 'react'
import {Link} from 'react-scroll'
import Logo from '../components/logo.png'
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        
        <div>
            <div className={'flex items-center bg-[#E9F1FA] justify-between border-1 gap-2'}>
                <div className={''}>
                    <a href={'/'}><Image src={Logo} className={'max-w-[190px] ml-2 rounded-lg'} alt={'/'} /></a>
                </div>
                <div className={'hidden md:flex items-center gap-6 pr-4'}>
                    <Link to='about' smooth={true} duration={500}><button className={'text-xl font-semibold border-0 text-[#00387d] p-2 rounded-lg'}>About</button></Link>
                    <Link to='services' smooth={true} duration={500}><button className={'text-xl font-semibold border-0 text-[#00387d] p-2 rounded-lg'}>Services</button></Link>
                    <Link to="contact" smooth={true} duration={500}><button className={'text-xl font-semibold border-0 text-[#00387d] p-2 rounded-lg'}>Contact Us</button></Link>
                </div>
        
        {/*MenuBar*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!isOpen ? (
            <div className="p-4 mr-4 text-[#00387d] rounded-full cursor-pointer bg-blue-200">
              <FaBars size={25} />
            </div>
          ) : (
            <div className="p-4 mr-4 text-white rounded-full cursor-pointer">
              <FaTimes size={25} />
            </div>
          )}
        </div>
      </div>

      <ul className={!isOpen ? 'hidden' : 'fixed top-0 left-0 w-full h-full text-white bg-black/80 flex flex-col justify-center items-center p-4 md:hidden'}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>    
    )
}
export default Navbar
