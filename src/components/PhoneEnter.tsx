
import './PhoneEnter.css'
import { PhoneNumber } from '../types/PhoneNunber';
import { ChangeEvent, useEffect, useState } from 'react';

const phoneNumber = new PhoneNumber();

function PhoneEnter() {
    const [phone, setPhone] = useState('');

    function handleClick(digit: number) {

        phoneNumber.addDigit(digit);
        setPhone(phoneNumber.value)
    }

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key >= '0' && e.key <= '9') {
                console.log(`You pressed the digit: ${e.key}`);
                phoneNumber.addDigit(+e.key)
                setPhone(phoneNumber.value)
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //     console.log(e)
    //     const position = phoneNumber.addDigit(+e.target.value)
    //     setPhone(phoneNumber.value)
    //     e.target.selectionStart = position;
    // }

    return (
        <div className='phoneEnter'>
            <button className='btn-close'>
                <div className='close'></div>
            </button>
            <div className='phoneEnter_qr'>
                <p className='phoneEnter_text'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <img className='phoneEnter_img' src='./imgs/qr.png' />
            </div>
            <div className='container'>
                <div className='container_content'>
                    <p className="container_title">
                        Введите ваш номер
                        мобильного телефона
                    </p>
                    <input placeholder='+7 (___) ___-__-__' type="text" value={phone} />
                    <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                    <div className="numbers">
                        <button className="number" onClick={() => handleClick(1)}>1</button>
                        <button className="number" onClick={() => handleClick(2)}>2</button>
                        <button className="number" onClick={() => handleClick(3)}>3</button>
                        <button className="number" onClick={() => handleClick(4)}>4</button>
                        <button className="number" onClick={() => handleClick(5)}>5</button>
                        <button className="number" onClick={() => handleClick(6)}>6</button>
                        <button className="number" onClick={() => handleClick(7)}>7</button>
                        <button className="number" onClick={() => handleClick(8)}>8</button>
                        <button className="number" onClick={() => handleClick(9)}>9</button>
                        <button className="number delete" onClick={() => ''}>Стереть</button>
                        <button className="number" onClick={() => handleClick(0)}>0</button>
                    </div>
                    <div className="checkbox_container">
                        <input type="checkbox" className="checkbox" />
                        <label htmlFor="yes">Согласие на обработку персональных данных</label>
                    </div>
                    <button className='btn-yes confirm'>Подтвердить номер</button>
                </div>
            </div>
        </div>
    );
}

export default PhoneEnter;