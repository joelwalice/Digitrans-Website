import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className={'bg-indigo-800 pb-10'}>
            <h1 className={'text-6xl flex text-orange-500 font-semibold pt-10 mb-10 justify-center'}>Contact Us</h1>
            <div className={'flex flex-col justify-center items-center gap-3'}>
            <div className={'flex text-2xl text-white gap-5 items-center'}>
                <p>Email : </p>
                <p className={'text-sm md:text-xl'}>digitransservices@gmail.com</p>
            </div>
            <div className={'flex text-2xl text-white gap-5 items-center'}>
                <p>Mobile : </p>
                <p className={'text-xl'}>9952037361</p>
            </div>
            </div>
        </div>
    )
}
export default Contact
