import React from "react";
import {Link} from 'react-router-dom';

const ListMenu = (props) => {
    let indexBorderStyle = {borderBottom: 'solid  white 1px', color: 'white'}
    let styleList = [{}, {},{},{},{}];
    switch (props.index) {
        case 0:
            styleList[props.index] = indexBorderStyle;
            break;
        case 1:
            styleList[props.index] = indexBorderStyle;
            break;
        case 2:
            styleList[props.index] = indexBorderStyle;
            break;
        case 3:
            styleList[props.index] = indexBorderStyle;
            break;
        case 4:
            styleList[props.index] = indexBorderStyle;
            break;
        default:
            styleList[props.index] = indexBorderStyle;
            break;
    }
    return (
        <ul>
            <Link onClick={() => {
                    props.setIndex(0);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/"}>
                <li style={styleList[0]}>Inicio</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(1);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/servicios"}>
                <li style={styleList[1]}>Servicios de consultoría</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(2);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/conocenos"}>
                <li style={styleList[2]}>Conócenos</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(3);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/blog"}>
                <li style={styleList[3]}>Blog</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(4);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/contacto"}>
                <li style={styleList[4]}>Contacto</li>
            </Link>
        </ul>
    );
}

export default ListMenu;