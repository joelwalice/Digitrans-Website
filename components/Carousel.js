import React, { useState , useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1691120040190-b763dfee386c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1691434865454-f1998e81869b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=870&q=80',
    // Add more image URLs as needed
  ];

  const totalImages = images.length;
  const imagesPerSlide = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - imagesPerSlide : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - imagesPerSlide ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalImages - imagesPerSlide ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  })

  return (
    <div className={'mb-10'}>
      <h1 className={'ml-4 text-5xl md:text-6xl flex text-orange-600 font-semibold mt-[100px] mb-10 justify-center'}>
        Services we serve
      </h1>
      <div className={'flex'}>
        <div className={'w-2/12 flex items-center'}>
          <div className={'w-full text-right'}>
            <button className={'border-0 bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2'} onClick={prevSlide}>
              <BsChevronLeft size={30} />
            </button>
          </div>
        </div>
        <div className={'hidden md:flex w-full'}>
          <ul className={'flex w-full'}>
            {[currentIndex, currentIndex + 1, currentIndex + 2].map((index) => (
              <li key={index} className={'p-5'}>
                <div className={'border rounded-lg p-5 h-full'}>
                  <img src={images[index % totalImages]} alt="" className={'h-50 w-full object-cover rounded-md'} />
                  <h2 className={'mt-2 text-2xl font-bold text-gray-700'}>Some Heading</h2>
                  <p className={'mt-2 text-gray-500'}>
                    lorem ipson jhwdbkjbckwjbdcbob jsldknlkcnlkwnl lkwnelnoinoienrnf lksldnknclknolinlon
                  </p>
                  <button className={'rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white mt-2'}>See more</button>
                </div>
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
