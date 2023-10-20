import './PhoneEnter.css'

function PhoneEnter() {
    return (
        <div className='container'>
            <p className="container_title">
                Введите ваш номер
                мобильного телефона
            </p>
            <input placeholder="+7(___)___-__-__" />
            <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <div className="numbers">
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
                <button className="number delete">Стереть</button>
                <button className="number">0</button>
            </div>
            <input type="checkbox" className="checkbox" />
            <label htmlFor="yes-two">Согласие на обработку персональных данных</label>
            <button className='btn-yes confirm'>Подтвердить номер</button>
        </div>
    );
}

export default PhoneEnter;