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
        <div className='MainPage'>
            {showComponent &&
                <div className='greeting delayed-component'>
                    <p className='greeting_title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />
                        ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                    <img className='greeting_img' src='./imgs/qr.png' />
                    <p>Сканируйте QR-код <br />
                        или нажмите ОК</p>
                        <button className='btn-yes' onClick={handleOkClick}>OK</button>
                </div>}
        </div>
    )
}

export default MainPage;

