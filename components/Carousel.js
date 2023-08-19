import React, { useState , useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';
import Enterprise from '@/components/enterprise.jpg';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const transitionDuration = 500;

  const totalImages = images.length;
  const totalCards = cards.length;
  const cardsPerSlide = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - cardsPerSlide : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1));
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <div className={'mb-10'}>
      <h1 className={'ml-4 text-5xl md:text-6xl flex text-[#00387d] font-semibold mt-[100px] mb-10 items-center justify-center'}>
        Services we serve
      </h1>
      <div className={'flex items-center justify-center'}>
        <div className={'w-2/12 flex items-center justify-center'}>
          <div className={'w-full text-right'}>
            <button className={'border-0 bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2'} onClick={prevSlide}>
              <BsChevronLeft size={30} />
            </button>
          </div>
        </div>
        <div className={'hidden md:flex w-full'}>
          <ul className={`flex transition-container transform -translate-x-${currentIndex * 33.33}%`}>
            {[currentIndex, currentIndex + 1, currentIndex + 2].map((index) => (
              <li key={index} className={'p-5 '}>
                <div className={'border rounded-lg p-5 h-full bg-[#E9F1FA] shadow-xl'}>
                  <img src={images[index % totalImages]} alt="" className={'h-50 w-full object-cover rounded-md'} />
                  <h2 className={'mt-2 text-2xl font-bold text-gray-700'}>{cards[index%totalCards].title}</h2>
                  <p className={'mt-2 text-gray-500'}>
                  {cards[index%totalCards].details}
                  </p>
                  <Link href={cards[index%totalCards].r}><button className={'rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white mt-2'}>See more</button></Link>                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={'w-2/12 flex items-center'}>
          <div className={'w-full text-left'}>
            <button className={'border-0 bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2'} onClick={nextSlide}>
              <BsChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;