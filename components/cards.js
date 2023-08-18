import React from 'react'
import Link from "next/link";

const Cards = () => {
    return (
        <div name='services' className='bg-[#E9F1FA]'>
            <h1 className={'text-6xl flex items-center justify-center pl-4 md:flex pt-10 mb-[80px] text-[#00387d] font-semibold items-center justify-center'}>Our Services</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-gray-500 text-white bg-gradient-to-bl from-indigo-900 via-indigo-500 to-indigo-900 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>GPT-3 | GPT 4 Development</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>
                        <Link href={'/gpt/1'}><p className="hover:text-red-400">- Enterprise Chatbot</p></Link>
                        <Link href={'/gpt/2'}><p className="hover:text-red-400">- Personalised customer support bot</p></Link>
                        <Link href={'/gpt/3'}><p className="hover:text-red-400">- Staff onboarding bot</p></Link>
                        <Link href={'/gpt/4'}><p className="hover:text-red-400">- Sales bot</p></Link>
                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-gray-500 text-white bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Data solutions Development</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>
                        <Link href={'/data/1'}><p className="hover:text-red-400">- Data analysis</p></Link>
                        <Link href={'/data/2'}><p className="hover:text-red-400">- Data Visualization</p></Link>
                        <Link href={'/data/3'}><p className="hover:text-red-400">- Consulting</p></Link>
                        <Link href={'/data/4'}><p className="hover:text-red-400">- Data Forecasting</p></Link>
                    </div>
                </div>
                </div>
           <div className='shadow-lg pl-4 shadow-gray-500 text-white bg-gradient-to-tl from-indigo-900 via-indigo-500 to-indigo-900 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Services Development</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>
                        <Link href={'/service/1'}><p className="hover:text-red-400">- Web development</p></Link>
                        <Link href={'/service/2'}><p className="hover:text-red-400">- Graphic designing</p></Link>
                        <Link href={'/service/3'}><p className="hover:text-red-400">- Social media marketing</p></Link>
                        <Link href={'/service/4'}><p className="hover:text-red-400">- Content Generation</p></Link>
                    </div>
                </div>
           </div>
      </div>
        </div>
    )
}
export default Cards
