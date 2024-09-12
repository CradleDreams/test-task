import React from 'react';
import '../../../shared/ui/HomeSlide.css';
import { homeImages } from './images';

const HomeSlide = ({ moveFocus2 }) => {
  return (
    <div className={'container'}>
      {homeImages.map((obj) => (
        <img src={obj} className={'element-home'} />
      ))}
      <img src={'images/button/button.png'} className={'element-home'} onClick={moveFocus2} />
      <div className={'title-field'}>
        <p className={'title-one'}>ПРИВЕТ,</p>
        <p className={'title-two'}>
          ЭТО <b>НЕ</b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
        </p>
      </div>
    </div>
  );
};

export default HomeSlide;
