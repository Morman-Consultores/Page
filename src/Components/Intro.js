import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import useWindowSize from "../useWindowSize";
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";

const Intro = (props) => {
    library.add(fab);
    let windowSize = useWindowSize().width;
    const [coloredHeader, setColoredHeader] = useState(false);
    const images = ['newYork.png', 'moscowSkyline.png','urban-building-lookup.png','newYorkMobile.png']
    let introImgSrc = require(`../Assets/${images[0]}`);
    const MINIMUM_SCROLL = 300;
    const TIMEOUT_DELAY = 100;
    let genContent;
    let imgStyle = {width: "450px"}
    let overlayDisplay;
    if(windowSize <750){
        imgStyle.width = "250px"
        introImgSrc = require(`../Assets/${images[3]}`)
    }

    switch (props.index) {
        case 1:
            genContent = <h2>Nuestros Servicios</h2>;
            imgStyle = {width: "250px"}
            break;
        case 2:
            genContent = <h1>Conócenos</h1>;
            imgStyle = {width: "250px"}
            break;
        case 3:
            genContent =(
                <span>
                    <h1>Blogs</h1>
                    <p>Muy Pronto!</p>
                </span>
            );
            imgStyle = {width: "250px"}
            break;
        case 4:
            genContent = (
                <div className={"generic"}>
                    <h2>Comunícate con nosotros</h2>
                    <p>¿Necesitas más información? </p>
                    <p>Escribenos o llamanos a nuestros telefonos</p>
                    <FontAwesomeIcon icon={faPhoneAlt} size={"1x"} color={"white"} style={{margin: "0 5px"}}/>
                    <a href={"tel:5527302482"}>+55 2730 2482</a>
                    <br/><br/>
                    <FontAwesomeIcon icon={faEnvelope} size={"1x"} color={"white"} style={{margin: "0 5px"}}/>
                    <a href={"mailto:jmora@morman.page"}>jmora@morman.page</a>
                </div>
            );
            imgStyle = {display: "none"}
            if(windowSize < 750){
                overlayDisplay = {justifyContent: "flex-end"}
            }
            break;
        case 5:
            genContent = "";
            imgStyle = {display: "none"}
            break;
        default:
            genContent = "";
            break;
    }

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
            <div className={"overlayBlue"} style={overlayDisplay}>
                <img style={imgStyle} alt={"Logo"} src={require('../Assets/tituloMormanBlanco.png')}/>
                {genContent}
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