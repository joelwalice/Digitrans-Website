import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="bg-gray-300 pb-10 flex flex-col items-center justify-center">
        <div className="text-4xl md:text-6xl pl-4 flex text-[#00387d] font-semibold pt-10 mb-10 justify-center items-center">
        <h1>Lets get in touch</h1>
        </div>
        <form action="https://formsubmit.co/9f7b23267d0ae6e708ba229280d19db6" className="flex flex-col pl-4 items-center justify-center w-full gap-5" method="POST" >
        <input className="border rounded-lg shadow-lg p-4 w-1/2" type="text" name="name" placeholder="Full Name" required/>
        <input className="border rounded-lg shadow-lg p-4 w-1/2" type="text" name="subject" placeholder="Subject" required/>
        <input className="border rounded-lg shadow-lg p-4 w-1/2" type="email" name="email" placeholder="Email" required/>
        <textarea className="border rounded-lg shadow-lg w-1/2 p-4" name="context" placeholder="How can we help you?" required></textarea>
        <input className="border rounded-lg shadow-lg p-4 w-1/2" name="budget" type="text" placeholder="Budget" required/>
        <div className="">
        <input className="border cursor-pointer border-indigo-600 rounded-lg shadow-lg p-5 bg-indigo-600 text-white" type="submit" value="Submit"/>
        </div>
      </form>
      </div>
        </div>
    )
}
export default Form
