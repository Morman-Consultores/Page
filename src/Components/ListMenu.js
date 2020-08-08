import React from "react";
import {Link} from 'react-router-dom';

const ListMenu = (props) => {
    return (
        <ul>
            <Link onClick={() => {
                    props.setIndex(0);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/"}>
                <li>Inicio</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(1);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/servicios"}>
                <li>Servicios de consultoría</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(2);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/conocenos"}>
                <li>Conócenos</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(3);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/blog"}>
                <li>Blog</li>
            </Link>
            <Link onClick={() => {
                    props.setIndex(4);
                    props.openMenu(false)}}
                  className={"noDecor"}
                  to={"/contacto"}>
                <li>Contacto</li>
            </Link>
        </ul>
    );
}

export default ListMenu;