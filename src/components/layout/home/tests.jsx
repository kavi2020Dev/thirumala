import React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';

const SwiperComponent = ({ swipperData }) => {
  const scrollRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='relative p-12 bg-red-300 px-14'>
      <div
        ref={scrollRef}
        className='w-full bg-white flex overflow-x-scroll cursor-pointer'
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {swipperData.map((item, idx) => (
          <div key={idx} className='box-container mx-6'>
            <div className='box-content'>
              <Avatar
                variant='square'
                src={item?.slide}
                style={{ width: '215px', height: '145px' }}
                alt='re'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
