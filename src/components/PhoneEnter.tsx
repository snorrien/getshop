
import { PhoneNumberService } from '../Services/PhoneNumberService';
import './PhoneEnter.css'
import { useEffect, useState } from 'react';

const phoneNumber = new PhoneNumberService();

function PhoneEnter() {
    const [phone, setPhone] = useState<string | undefined>();
    const [selectBox, setSelectBox] = useState(false);

    const handleClickBox = () => {
        setSelectBox(!selectBox);
    };

    function addDigit(digit: number) {
        phoneNumber.addDigit(digit);
        setPhone(phoneNumber.value)
    }

    function clean() {
        phoneNumber.clean();
        setPhone(phoneNumber.value)
    }

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            console.log(e.key)
            if (e.key >= '0' && e.key <= '9') {
                phoneNumber.addDigit(+e.key)
                setPhone(phoneNumber.value);
            } else if (e.key === 'Backspace') {
                phoneNumber.removeLastDigit();
                setPhone(phoneNumber.value);
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    function handleConfirmClick(): void {
        console.log('asd')
    }

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
                    <input placeholder='+7 (___) ___-__-__' readOnly type="text" defaultValue={phone} />
                    <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                    <div className="numbers">
                        <button className="number" onClick={() => addDigit(1)}>1</button>
                        <button className="number" onClick={() => addDigit(2)}>2</button>
                        <button className="number" onClick={() => addDigit(3)}>3</button>
                        <button className="number" onClick={() => addDigit(4)}>4</button>
                        <button className="number" onClick={() => addDigit(5)}>5</button>
                        <button className="number" onClick={() => addDigit(6)}>6</button>
                        <button className="number" onClick={() => addDigit(7)}>7</button>
                        <button className="number" onClick={() => addDigit(8)}>8</button>
                        <button className="number" onClick={() => addDigit(9)}>9</button>
                        <button className="number delete" onClick={() => clean()}>Стереть</button>
                        <button className="number" onClick={() => addDigit(0)}>0</button>
                    </div>
                    <div className="checkbox_container">
                        <button className={`checkbox ${selectBox ? 'selectCheckbox' : ''}`} onClick={handleClickBox}></button>
                        <p>Согласие на обработку персональных данных</p>
                    </div>
                    <button disabled={!phoneNumber.isValid || !selectBox} className='btn-yes confirm' onClick={handleConfirmClick}>Подтвердить номер</button>
                </div>
            </div>
        </div>
    );
}

export default PhoneEnter;