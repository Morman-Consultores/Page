import React, {useState} from "react";
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";
import useWindowSize from "../useWindowSize";

const HeaderNav = () => {
    let windowSize = useWindowSize().width;
    const [coloredHeader, setColoredHeader] = useState(false);

    let listMenu = (
        <ul>
            <li><a href="index.html#home">Inicio</a></li>
            <li><a href="index.html#about">Servicios de consultoría</a></li>
            <li><a href="index.html#team">Conócenos</a></li>
            <li><a href="index.html#projects">Blog</a></li>
            <li><a href="index.html#contact">Contacto</a></li>
        </ul>
    );
    if(windowSize < 750) {
        listMenu = ""
    };

    const MINIMUM_SCROLL = 600;
    const TIMEOUT_DELAY = 100;

    useDocumentScrollThrottled(callbackData => {
        const { currentScrollTop } = callbackData;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setTimeout(() => {
            setColoredHeader(isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const coloredStyle = coloredHeader ? 'colored' : '';

    return (
        <header className={coloredStyle}>
            <img alt={"Logo"} src={require('../Assets/Logo_Morman_Blanco.png')}/>
            {listMenu}
        </header>
    );
}

export default HeaderNav;