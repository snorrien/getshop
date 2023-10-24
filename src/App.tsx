import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import PhoneEnter from './components/PhoneEnter';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [y, setY] = useState<any>(document.scrollingElement?.scrollHeight);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const handleNavigation = useCallback((e: any) => {
    if (y < window.scrollY) {
      setIsPlaying(false)
    } else if (y > window.scrollY) {
      setIsPlaying(true)  
    }
    console.log(isPlaying);
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleClickScroll = () => {
    const element = document.getElementById('section-two');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='App' id="section-one" >
        <video loop ref={videoRef} controls muted id='bg-video'>
          <source src={require('./assets/videoBg.mp4')} type='video/mp4' />
        </video>
        <div className='greeting'>
          <p className='greeting_title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />
            ПОДАРИТЕ ЕМУ СОБАКУ!</p>
          <img className='greeting_img' src='./imgs/qr.png' />
          <p>Сканируйте QR-код <br />
            или нажмите ОК</p>

          <button className='btn-yes' onClick={handleClickScroll}> OK</button>
        </div>
      </div>
      <div id="section-two">
        <PhoneEnter />
      </div>
    </div>
  );
}

export default App;
