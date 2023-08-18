import React from 'react'
import { useRouter } from 'next/router'
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";

const Id = () => {
    const router = useRouter()
    const id = router.query.id;
    const gpt = [
        {
    id: 1,
    name: "Web Development",
    title:"Harness Web Development for Business Advancement",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 2,
    name: "Graphic Designing",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 3,
    name: "Social Media Marketing",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 4,
    name: "Content Generation",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
  },
    ]
const gpts = gpt.find(item => item.id === parseInt(id));

    if (!gpts) {
        return (
            <div>
                <Navbar />
                <p>Educator not found</p>
            </div>
        );
    }

    return (
        <div>
            <title>{gpts.name}</title>
            <Navbar />
            <div className={'flex items-center justify-center'}>
                <h1 className={'text-5xl md:text-6xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>{gpts.name}</h1>
            </div>
            <div>
                <div className={'w-screen h-[300px] bg-blue-600'}>
                    <h1 className={'flex items-center justify-center text-white'}>Image</h1>
                </div>
                <div className={'p-6'}>
                    <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Detailed Description</h1>
                    <p className={'text-lg'}>{gpts.description}</p>
                </div>
            </div>
            <div>
                <h1 className={'pl-6 text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Blogs related to {gpts.name}</h1>
                <div className={'mb-[50px]'}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Blog 1</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Blog 2</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className={'mt-4'}>
                            <h1 className='text-2xl font-semibold flex justify-center'>Blog 3</h1>
                            <div className='flex flex-col justify-center m-5 gap-4'>

                            </div>
                        </div>
                </div>
          </div>
          <div>
              <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Pricing</h1>
              <div>
                <div className={'mb-[50px]'}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price1}</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 h-[300px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Price : {gpts.price3}</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className={'mt-4'}>
                            <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price2}</h1>
                            <div className='flex flex-col justify-center m-5 gap-4'>

                            </div>
                        </div>
                </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
            <div className={'pb-10'}>
                <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Name 1</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Name 2</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
           <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Name 3</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                </div>
           </div>
      </div>
            </div>
            <Footer />
        </div>
    );
};
export default Id
