import React from "react";
import Intro from "./Intro";
import Foot from "./Foot";

const AboutUs = (props) => {
    return (
        <div>
            <Intro index={props.index}/>
            <div className={"aboutCont"}>
                <h1>Sobre Nosotros</h1>
                <div className={"introMessage"}>
                    <h3>INTRODUCCIÓN</h3>
                    <p>La creación de la consultoría MORMAN, tiene como objetivo ayudar a todas aquellas empresas
                        que lo necesiten, esta pandemia nos ha dejado algo muy claro, NOS NECESITAMOS, como
                        mexicanos debemos estar unidos para poder pasar por estas tempestades.</p>
                    <p>Creemos firmemente que es gracias a las pequeñas y medianas empresas, así como gracias a los
                        comercios que México hoy es grande, nuestro objetivo no sólo es mantenerlo grande, sino
                        convertirlo en un gigante.</p>
                    <p>A través del apoyo a todas las empresas que forjan este gran país, queremos verlos salir adelante,
                        ya basta de cerrar ese negocio por no encontrar la mejor opción, ya basta de tener que despedir a
                        nuestros colaboradores por la falta de ingresos para el pago de nómina, simplemente basta con
                        realizar los mejores análisis para poder encontrar las mejores soluciones.</p>
                    <p>¡Nosotros podemos ayudarte!</p>
                </div>
            </div>
            <div className={"missionVisionCont"}>
                <div className={"misVisData"}>
                    <h4>MISIÓN</h4>
                    <p>Morman es actualmente una consultoría multidisciplinaria, cuyo objetivo es ayudar a crecer a las
                        empresas que lo requieran y de esta forma posicionarse en el más alto nivel en el ramo. Somos
                        creadores de networking, por lo que no sólo te ayudaremos con temas administrativos,
                        comerciales, R.H., Soluciones digitales y legales. Sino también te contactaremos con otras
                        empresas clientes para que puedas generar alianzas de éxito profesional.</p>
                </div>
                <div className={"misVisData"}>
                    <h4>VISIÓN</h4>
                    <p>Nuestra visión es convertirnos en tu punto de apoyo ¡siempre! Verte como un socio más que
                        tenga la oportunidad de apoyar y crecer dentro y fuera de la organización en la que participes. Así
                        como de tu propio negocio o empresa.</p>
                </div>
            </div>
            <Foot/>
        </div>
    )
}

export default AboutUs;