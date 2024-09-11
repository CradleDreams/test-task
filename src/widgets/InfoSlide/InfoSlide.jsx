import React, { useRef } from 'react';
import './InfoSlide.css';
import { data } from './data';
import Slider from '../../features/Slider/Slider';
const InfoSlide = ({ scrollPosition }) => {
  const scrollContainerRef = useRef(null);

  return (
    <>
      <div className={'container'}>
        <img
          src={'images/worm/many-pink-worm.png'}
          className={`worms${scrollPosition > 500 ? '2' : ''}`}
        />
        <p className={'text-message'}>ТЕКСТ СООБЩЕНИЯ</p>
        <Slider scrollContainerRef={scrollContainerRef} />
        <div ref={scrollContainerRef} className={'text-field'}>
          <b>{data[0]}</b>
          {data[1].slice(26)}
          <br />
          <br />
          {data[1]}
        </div>
      </div>
    </>
  );
};

export default InfoSlide;
