
import { PhoneNumberService } from '../../Services/PhoneNumberService';
import './PhoneEnter.css'
import { useEffect, useState } from 'react';

const phoneNumber = new PhoneNumberService();

interface Props {
    returnToMainPage: () => void;
}

function PhonePage({ returnToMainPage }: Props) {
    const [phone, setPhone] = useState<string | undefined>();
    const [isChecked, setIsChecked] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const handleClickBox = () => {
        setIsChecked(!isChecked);
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
        setIsAccepted(true)
    }

    function handleCloseClick(): void {
        returnToMainPage();
    }

    return (
        <div className='phone-page'>
            <button className='close-button phone-page__close-button' onClick={handleCloseClick}>
                <div className='close-button__image'></div>
            </button>
            <div className='qr-code phone-page__qr-code'>
                <p className='qr-code__text'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <img className='qr-code__image' src='./imgs/qr.png' />
            </div>
            <div className='phone-page__content'>
                {!isAccepted ?
                    <div className='phone-form'>
                        <p className="phone-form__title">
                            Введите ваш номер
                            мобильного телефона
                        </p>
                        <input className='phone-form__input' placeholder='+7 (___) ___-__-__' readOnly type="text" defaultValue={phone} />
                        <p >и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <div className="phone-form__digits">
                            <button className="phone-form__digit" onClick={() => addDigit(1)}>1</button>
                            <button className="phone-form__digit" onClick={() => addDigit(2)}>2</button>
                            <button className="phone-form__digit" onClick={() => addDigit(3)}>3</button>
                            <button className="phone-form__digit" onClick={() => addDigit(4)}>4</button>
                            <button className="phone-form__digit" onClick={() => addDigit(5)}>5</button>
                            <button className="phone-form__digit" onClick={() => addDigit(6)}>6</button>
                            <button className="phone-form__digit" onClick={() => addDigit(7)}>7</button>
                            <button className="phone-form__digit" onClick={() => addDigit(8)}>8</button>
                            <button className="phone-form__digit" onClick={() => addDigit(9)}>9</button>
                            <button className="phone-form__digit phone-form__digit_big" onClick={() => clean()}>Стереть</button>
                            <button className="phone-form__digit" onClick={() => addDigit(0)}>0</button>
                        </div>
                        <div className="checkbox">
                            <button className={`checkbox__button ${isChecked ? 'checkbox__button_checked' : ''}`} onClick={handleClickBox}></button>
                            <p className='checkbox__label'>Согласие на обработку персональных данных</p>
                        </div>
                        <button disabled={!phoneNumber.isValid || !isChecked} className='button phone-form__confirm-button' onClick={handleConfirmClick}>Подтвердить номер</button>
                    </div>
                    :
                    <div className='confirmation'>
                        <p className='confirmation__title'>ЗАЯВКА <br />ПРИНЯТА</p>
                        <p>Держите телефон под рукой. <br /> Скоро c Вами свяжется наш менеджер. </p>
                    </div>
                }
            </div>
        </div>
    );
}

export default PhonePage;