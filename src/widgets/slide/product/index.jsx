import React, { useState } from 'react';
import '../../../shared/ui/ProductSlide.css';
import { productImages } from './images';
import ModalWindow from '../../modal/window';
const ProductSlide = () => {
  const [isInfo, setIsInfo] = useState(false);
  const Close = () => {
    setIsInfo(!isInfo);
  };
  return (
    <div className={`container${isInfo ? '1' : ''}`}>
      {productImages.map((obj) => (
        <img src={obj} className={'element-product'} />
      ))}
      <img src={'images/button/button-info.png'} className={'button-info'} onClick={Close} />
      {isInfo ? (
        <>
          <ModalWindow Close={Close} />
        </>
      ) : null}
      <div className={'notepad-field'}>A arcu cursus vitae</div>
      <div className={'dish-field'}>
        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
        ultricies
      </div>
      <div className={'field-product-t'}>
        {isInfo ? (
          <p className={'product-message'}>ПРЕИМУЩЕСТВА</p>
        ) : (
          <p className={'product-message'}>КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
        )}
        <p className={'product-name'}>
          BREND<b>XY</b>
        </p>
      </div>
    </div>
  );
};

export default ProductSlide;
