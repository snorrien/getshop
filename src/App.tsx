import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import PhoneEnter from './components/PhoneEnter';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [page, setPage] = useState<'Form' | 'Main' | 'Info'>('Main')

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  function openFormPage() {
    setPage('Form');
    setIsPlaying(false);
  }

  function closeFormPage() {
    setPage('Main');
    setIsPlaying(true);
  }

  function openInfoPage() {
    setPage('Info');
  }

  return (
    <div className='App'>
      <video loop ref={videoRef} controls muted id='bg-video'>
        <source src={require('./assets/videoBg.mp4')} type='video/mp4' />
      </video>
      {page === 'Main' &&
        <MainPage openFormPage={openFormPage} />
      }
      {page === 'Form' &&
        <PhoneEnter openInfoPage={openInfoPage} returnToMainPage={closeFormPage} />
      }
    </div>
  );
}

export default App;
