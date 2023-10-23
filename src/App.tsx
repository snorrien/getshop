import React from 'react';
import './App.css';
import PhoneEnter from './components/PhoneEnter';

function App() {
  return (
    <div>
      <div className='App'>
        <video loop autoPlay muted id='bg-video'>
          <source src={require('./assets/videoBg.mp4')} type='video/mp4' />
        </video>
        <div className='greeting'>
          <p className='greeting_title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />
            ПОДАРИТЕ ЕМУ СОБАКУ!</p>
          <img className='greeting_img' src='./imgs/qr.png' />
          <p>Сканируйте QR-код <br />
            или нажмите ОК</p>
          <button className='btn-yes'> OK</button>
        </div>
      </div>
      <PhoneEnter/>
    </div>
  );
}

export default App;
