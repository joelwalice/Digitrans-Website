import React from 'react'

const About = () => {
    return (
        <div name={'about'} className="">
            <div className='max-w-screen min-h-[340px] w-full pb-6 mt-[120px] items-center bg-indigo-800 p-6 grid sm:grid-cols-2 gap-8 px-4'>
            <div className='flex items-center justify-center text-6xl text-orange-500 font-bold'>
                <p>About Us</p>

            </div>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className='sm:text-0.8xl text-white items-center'>Digitranss AI is your full-cycle AI development partner, from concept to production and beyond. We're not just machine learning specialists, we're the team that helps startups and enterprises create cutting-edge AI products that optimize efficiency and accelerate growth. We guide you through the entire process and shape your ideas into ready-to-go solutions. With our expertise across multiple industries, we'll help you build an innovative product that fosters your company's success.</p>
            </div>

        </div>
        </div>
    )
}
export default About
