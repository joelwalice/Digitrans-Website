import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
  const slides = [
    {
      url:
        'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      url:
        'https://images.unsplash.com/photo-1691120040190-b763dfee386c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        url:
        'https://images.unsplash.com/photo-1691434865454-f1998e81869b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=870&q=80',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
        return () => clearInterval(interval);
    }, [currentSlide]);

  return (
    <div>
      <h1 className={'ml-4 text-5xl md:text-6xl flex text-orange-600 font-semibold mt-[100px] mb-10 justify-center'}>
        Services we serve
      </h1>
      <div className={'max-w-[550px] h-[400px] w-full m-auto py-16 px-4 relative group'}>
        <div
          style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          className={'w-full h-full rounded-2xl bg-center bg-cover duration-500'}
        >
          <div
            className={
              'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
            }
          >
            <BsChevronLeft onClick={prevSlide} size={30} />
          </div>
          <div
            className={
              'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
            }
          >
            <BsChevronRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className={'flex top-4 justify-center py-2'}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex);
              }}
              className={`text-2xl cursor-pointer ${currentSlide === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}
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

