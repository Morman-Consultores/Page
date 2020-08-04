import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";

const Intro = () => {
    library.add(fab);
    const [coloredHeader, setColoredHeader] = useState(false);
    const images = ['newYork.png', 'moscowSkyline.png','urban-building-lookup.png']
    let i = 0;
    let introImgSrc = require(`../Assets/${images[1]}`);

    const MINIMUM_SCROLL = 300;
    const TIMEOUT_DELAY = 100;

    useDocumentScrollThrottled(callbackData => {
        const { currentScrollTop } = callbackData;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setTimeout(() => {
            setColoredHeader(isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const coloredStyle = coloredHeader ? 'colored' : '';
    return(
        <div className={`introImg`}>
            <img alt={"introImg"} src={introImgSrc}/>
            <div className={"overlayCont"}>
            </div>
            <div className={"overlayBlue"}>
                <img alt={"Logo"} src={require('../Assets/tituloMormanBlanco.png')}/>
            </div>
            <div className={`socialIconBar ${coloredStyle}`}>
                <a target={"blank"} href={"https://www.instagram.com/mormanconsultoresmx/"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'instagram']} size="2x" color="white"/>
                </a>
                <a target={"blank"} href={"https://www.linkedin.com/company/morman-consultores/"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'linkedin']} size="2x" color="white"/>
                </a>
            </div>
        </div>
    )
}

export default Intro;