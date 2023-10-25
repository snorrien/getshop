import { useEffect, useRef, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import PhonePage from './components/PhonePage/PhoneEnter';

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [page, setPage] = useState<'Form' | 'Main'>('Main')

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

  return (
    <div className='App'>
      <video loop ref={videoRef} controls muted id='bg-video'>
        <source src={require('./assets/videoBg.mp4')} type='video/mp4' />
      </video>
      {page === 'Main' &&
        <MainPage openFormPage={openFormPage} />
      }
      {page === 'Form' &&
        <PhonePage returnToMainPage={closeFormPage} />
      }
    </div>
  );
}

export default App;
