import React, {useState} from "react";
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";
import useWindowSize from "../useWindowSize";
import ListMenu from "./ListMenu";
import Hamburger from "./Hamburger";
import Overlay from "./Overlay";
import {Link} from 'react-router-dom';

const HeaderNav = (props) => {
    let windowSize = useWindowSize().width;
    let overStyle = {transform: "translateX(-100%"}
    const [coloredHeader, setColoredHeader] = useState(false);
    const [isOpen, openMenu] =useState(false);

    let listMenu = <ListMenu setIndex={props.setIndex} openMenu={openMenu}/>;

    if(windowSize < 750) {
        listMenu = <Hamburger isOpen={isOpen} openMenu={openMenu}/>
    }
    if(isOpen){
        overStyle.transform = "translateX(0)";
    }

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
            <Overlay
                isOpen={isOpen}
                openMenu={openMenu}
                setIndex={props.setIndex}
                style={overStyle}/>
        </header>
    );
}

export default HeaderNav;