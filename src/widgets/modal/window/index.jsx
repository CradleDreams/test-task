import React, { useState } from 'react';

const ModalWindow = ({ Close }) => {
  const [isNext, setIsNext] = useState(false);
  return (
    <>
      <img src={'images/button/btn_close.png'} className={'button-close'} onClick={Close} />
      <img
        src={'images/button/arrow-left.png'}
        className={'arrow-left'}
        onClick={() => setIsNext(false)}
      />
      <img src={'images/point.png'} className={'point-pink'} />
      <img src={`images/point${isNext ? '.png' : '-opacity.png'}`} className={'point-opacity'} />
      <img
        src={'images/button/arrow-right.png'}
        className={'arrow-right'}
        onClick={() => setIsNext(true)}
      />
      <div className={'modal-window'}>
        <div className={'modal-text-field'}>
          {isNext ? (
            <>
              <p className={'point'}>
                <b>04</b>
              </p>
              <p className={'modal-text'}>Mi bibendum neque egestas congue quisque egestas diam</p>
              <p className={'point'}>
                <b>05</b>
              </p>
              <p className={'modal-text'}>Venenatis lectus magna fringilla urna</p>
              <p className={'point'}>
                <b>06</b>
              </p>
              <p className={'modal-text'}>Venenatis lectus magna fringilla urna</p>{' '}
            </>
          ) : (
            <>
              <p className={'point'}>
                <b>01</b>
              </p>
              <p className={'modal-text'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={'point'}>
                <b>02</b>
              </p>
              <p className={'modal-text'}>Faucibus pulvinar elementum integer enim</p>
              <p className={'point'}>
                <b>03</b>
              </p>
              <p className={'modal-text'}>Faucibus pulvinar elementum integer enim</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
