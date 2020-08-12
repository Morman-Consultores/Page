import React from 'react';
import Intro from "./Intro";
import Foot from "./Foot";
import {Link} from "react-router-dom";
import ContactButton from "./ContactButton";

const Blogs = (props) => {
    return(
        <div>
            <Intro index={props.index}/>
            <div className={"blogTitle"}>
                <h1>BLOGS</h1>
                <div className={"searchAndFilter"}>
                    <div>
                        <button className={"searchBlogBtn"} type={"button"}>Buscar</button>
                        <input type={"text"} name={"blog"} placeholder={"buscar blog"}/>
                    </div>
                    <div className={"filter"}>
                        <img alt={"filter"} src={require("../Assets/filter.png")}/>
                        <p>FILTRAR</p>
                    </div>
                </div>
            </div>

            <div className={"blogList"}>
                <div className={"blog"}>
                    <img alt={"Blog Picture"} src={require('../Assets/aliance.png')}/>
                    <div className={"blogInfo"}>
                        <p>Juan Mora, Noviembre 21, 2018</p>
                        <h2>Alianzas ¿Clave del éxito?</h2>
                        <p>En el mundo empresarial, así como en la vida personal en algunas ocasiones debemos entender
                            la gran necesidad de conocernos a nosotros mismos, es decir, en diferentes circunstancias
                            nos empeñamos en apostarle a nuestra propia forma de hacer las cosas, nos enamoramos más de
                            lo debido de algún proyecto y terminamos cayendo en ese doloroso pensamiento que nos dice que
                            no tenemos errores, de alguna forma nos convencemos que... </p>
                        <Link to={"/articulo"}><button type={"button"} className={"readMoreBtn"}>LEER MÁS</button></Link>
                    </div>
                </div>
            </div>
            <ContactButton/>
            <Foot/>
        </div>
    )
}

export default Blogs;