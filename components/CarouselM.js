import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Carousel = () => {
  const images = [
    // An array of image URLs
    'https://plus.unsplash.com/premium_photo-1682023585793-97f171eb5bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80',
    'https://plus.unsplash.com/premium_photo-1681208068652-f3d8e1e52005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=920&q=100',
    'https://plus.unsplash.com/premium_photo-1681380409766-792f2bbb3ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=920&q=120',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNhbGVzJTIwYm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhdGElMjBhbmFseXNpc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80',
    'https://plus.unsplash.com/premium_photo-1661687517329-effdb0547754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhdGElMjBmb3JlY2FzdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBncmFwaGljJTIwZGVzaWduaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80',
    'https://plus.unsplash.com/premium_photo-1684341008285-3da3c563143e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbnRlbnQlMjBnZW5lcmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80'
    
  ]

  const cards = [
    // An array of card objects with different titles, details, and URLs
    {
      title: 'Enterprise ChatBot',
      details: 'Details for this ChatBot...',
      url: '../components/enterprise.jpg',
      r: '/gpt/1',
    },
    {
      title: 'Personalised ChatBot',
      details: 'Details for this ChatBot...',
      r: '/gpt/2',
    },{
      title: 'Staff Onboarding ChatBot',
      details: 'Details for this Chatbot...',
      r: '/gpt/3',
    },{
      title: 'Sales Bot',
      details: 'Details for Sales Bot...',
      r: '/gpt/4',
    },{
      title: 'Data Analysis',
      details: 'Details for Data Analysis...',
      r: '/data/1',
    },{
      title: 'Data Visualisation',
      details: 'Details for this services...',
      r: '/data/2',
    },{
      title: 'Consulting',
      details: 'Details for Consulting...',
      r: '/data/3',
    },{
      title: 'Data Forecasting',
      details: 'Details for data Forecasting...',
      r: '/data/4',
    },{
      title: 'Web Development',
      details: 'Details for this services...',
      r: '/service/1',
    },{
      title: 'Graphic Designing',
      details: 'Details for Designing...',
      r: '/service/2',
    },{
      title: 'Social Media Marketing',
      details: 'Details for this services...',
      r: '/service/3',
    },{
      title: 'Content Generation',
      details: 'Details for this services...',
      r: '/service/4',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + cards.length) % cards.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % cards.length;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const router = useRouter();

  return (
    <div>
      <h1 className="ml-4 text-5xl md:text-6xl flex text-[#00387d] font-semibold mt-[100px] mb-10 justify-center">
        Services we serve
      </h1>
      <div className="max-w-[550px] h-[400px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${images[currentSlide % images.length]})` }}
          className=" image relative w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className='overlay absolute w-full h-full top-0 left-0 bg-black/50 rounded-xl'></div>
           <div className="details absolute bottom-0 w-full h-full grid place-items-center flex items-center justify-center">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className={`${
                currentSlide === cardIndex ? 'block' : 'hidden'
              } p-5 border-0 rounded-lg`}
            >
              <h2 className="text-[22px] font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-md text-white">{card.details}</p>
              <button className="rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white mt-2" onClick={() => {router.push(cards[cardIndex].r)}}>
                See more
              </button>
            </div>
          ))}
        </div>
          <div
            className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
          >
            <BsChevronLeft onClick={prevSlide} size={20} />
          </div>
          <div
            className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
          >
            <BsChevronRight onClick={nextSlide} size={20} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              onMouseEnter={() => {
                goToSlide(cardIndex);
              }}
              className={`text-2xl cursor-pointer ${
                currentSlide === cardIndex ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;