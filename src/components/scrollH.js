import React  from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ScrollH = (props) => {
  const sliderId = 'slider' + Math.random();
  const slideLeft = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id={sliderId}
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {props.data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default ScrollH;
