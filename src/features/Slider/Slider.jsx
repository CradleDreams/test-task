import React, { useState } from 'react';

const Slider = ({ scrollContainerRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [position, setPosition] = useState({ top: 249 });

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };
  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0].clientY < 650 && e.touches[0].clientY > 300) {
      const touchY = e.touches[0].clientY;
      const deltaY = touchY - startY;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += deltaY * 1.1;
      }
      setPosition((prevPosition) => ({
        top: prevPosition.top + deltaY
      }));
      setStartY(touchY);
    }
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  return (
    <>
      <div onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd}>
        <img src={'images/line.png'} style={{ position: 'absolute', top: 252, left: 80 }} />
        <img
          src={'images/Slider.png'}
          onTouchStart={handleTouchStart}
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: 81,
            transform: 'translateX(-50%)',
            cursor: 'grab',
            userSelect: 'none'
          }}
          draggable="false"
        />
      </div>
    </>
  );
};
export default Slider;
