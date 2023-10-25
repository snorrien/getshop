import { useEffect, useState } from "react";
import "./MainPage.css";

interface Props {
    openFormPage: () => void;
}

function MainPage({ openFormPage }: Props) {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowComponent(true);
        }, 5000);
        return () => clearTimeout(delay);
    }, []);

    function handleOkClick(): void {
        openFormPage();
    }

    return (
        <div>
            {showComponent &&
                <div className='greeting'>
                    <p className='greeting__title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />
                        ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                    <img className='greeting__img' src='./imgs/qr.png' />
                    <p>Сканируйте QR-код <br />
                        или нажмите ОК</p>
                    <button className='button' onClick={handleOkClick}>OK</button>
                </div>}
        </div>
    )
}

export default MainPage;

