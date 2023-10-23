
import './PhoneEnter.css'
import { PhoneNumber } from '../types/PhoneNunber';
import { ChangeEvent, useEffect, useState } from 'react';

function PhoneEnter() {

    const phoneNumber = new PhoneNumber();
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setPhone(phoneNumber.value)
    }, [phoneNumber.value])


    function handleClick(number: string) {

        phoneNumber.addDigit(number);
        setPhone(phoneNumber.value)
        console.log(phoneNumber.value)
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>) {
   
    }

    
    

    return (
        <div className='<phoneEnter'>
            <div className='container'>
                <p className="container_title">
                    Введите ваш номер
                    мобильного телефона
                </p>
                <input placeholder='+7 (___) ___-__-__' type="text" value={phone} onChange={handleChange} />
                <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <div className="numbers">
                    <button className="number" onClick={() => handleClick('1')}>1</button>
                    <button className="number" onClick={() => handleClick('2')}>2</button>
                    <button className="number" onClick={() => handleClick('3')}>3</button>
                    <button className="number" onClick={() => handleClick('4')}>4</button>
                    <button className="number" onClick={() => handleClick('5')}>5</button>
                    <button className="number" onClick={() => handleClick('6')}>6</button>
                    <button className="number" onClick={() => handleClick('7')}>7</button>
                    <button className="number" onClick={() => handleClick('8')}>8</button>
                    <button className="number" onClick={() => handleClick('9')}>9</button>
                    <button className="number delete" onClick={() => ''}>Стереть</button>
                    <button className="number" onClick={() => handleClick('0')}>0</button>
                </div>
                <div className="checkbox_container">
                    <input type="checkbox" className="checkbox" />
                    <label htmlFor="yes">Согласие на обработку персональных данных</label>
                </div>
                <button className='btn-yes confirm'>Подтвердить номер</button>
            </div>
        </div>
    );
}

export default PhoneEnter;