/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from "next/link";
import About from "@/components/about";
import Carousel from "@/components/Carousel";
import Contact from "@/components/contact";
import Ai from "@/components/Ai";
import Form from "@/components/form";
import Footer from "@/components/footer";
import Cards from "@/components/cards";
import CarouselM from "@/components/CarouselM";
import Logos from "../components/imageTag.png";

export default function Home() {
  return (
    <div>
      <title>Digitranss AI</title>
      <Navbar />
        <div>
          <Image width={1000} src={Logos} className='hidden md:flex w-screen min-h-[480px]' />
          <Image width={1000} src={Logos} className='flex w-screen md:hidden' />
        </div>
      <Cards />
      <About />
      <div className={'hidden md:flex'}>
        <Carousel />
      </div>
      <div className={'flex items-center justify-center md:hidden'}>
        <CarouselM />
      </div>
      <Contact />
      <Form />
      <Footer />
    </div>
  )
}