import HomeSlide from '../widgets/HomeSlide/HomeSlide';
import InfoSlide from '../widgets/InfoSlide/InfoSlide';
import ProductSlide from '../widgets/ProductSlide/ProductSlide';
import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const homeRef = useRef(null);
  const nextRef = useRef(null);

  const handleScroll = (e) => {
    const { scrollLeft } = e.target;
    setScrollPosition(scrollLeft);
  };

  const moveFocus1 = () => {
    homeRef.current?.scrollIntoView();
  };
  const moveFocus2 = () => {
    nextRef.current?.scrollIntoView();
  };
  return (
    <>
      <img src={'images/home.png'} className={'main-el'} onClick={moveFocus1} />
      <img src={'images/logo.png'} className={'main-el'} />
      <div className="wrapper" onScroll={handleScroll}>
        <section ref={homeRef}>
          <HomeSlide moveFocus2={moveFocus2} />
        </section>
        <section ref={nextRef}>
          <InfoSlide scrollPosition={scrollPosition} />
        </section>
        <section>
          <ProductSlide />
        </section>
      </div>
    </>
  );
}

export default App;
