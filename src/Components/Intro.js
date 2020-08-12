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
    let introImg = <img id={"intoImg"} alt={"introImg"} src={require('../Assets/newYork.png')}/>;
    const images = [
        <img id={"intoImg"} alt={"introImg"} src={require('../Assets/newYork.png')}/>,
        <img id={"intoImg"} alt={"introImg"} src={require('../Assets/newYork02.png')}/>,
        <img id={"intoImg"} alt={"introImg"} src={require('../Assets/moscowSkyline.png')}/>,
        <img id={"intoImg"} alt={"introImg"} src={require('../Assets/urban-building-lookup.png')}/>,
        <img id={"intoImg"} alt={"introImg"} src={require('../Assets/newYorkMobile.png')}/>
    ];
    const MINIMUM_SCROLL = 300;
    const TIMEOUT_DELAY = 100;
    let genContent;
    let imgStyle = {width: "450px"}
    let overlayDisplay;
    let coloredStyle;
    if(windowSize <750){
        imgStyle.width = "250px"
        introImg = images[4];
    }

    switch (props.index) {
        case 1:
            introImg = images[1]
            genContent = <h2>Nuestros Servicios</h2>;
            imgStyle = {width: "250px"}
            break;
        case 2:
            introImg = images[2];
            genContent = <h1>Conócenos</h1>;
            imgStyle = {width: "250px"}
            break;
        case 3:
            introImg = introImg = images[3];
            genContent =(
                <span>
                    <h1>Blogs</h1>
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

    coloredStyle = coloredHeader ? 'colored' : '';
    if(props.index === 5){coloredStyle = 'colored'}

    return(
        <div className={`introImg`}>
            {introImg}
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