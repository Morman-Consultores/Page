import React from "react";

const Solutions = () => {
    return (
        <div className={"solutionCont"}>
            <h1>Nuestras Soluciones</h1>
            <div className={"serviceInfo"}>
                <div className={"dataCont"}>
                    <h2>Digitales</h2>
                    <p>Las plataformas digitales son los cimientos en los que se sostiene
                        nuestra sociedad y civilización actual, desde su nacimiento han sido canales
                    para el crecimiento muchas veces exponencial de empresas y negocios, nosotros te ayudaremos
                    a explotar estas plataformas y dirigirlas hacie el crecimiento de tu empresa. </p>
                </div>
                <img alt={"Service"} src={require("../Assets/digitalService.png")}/>
            </div>
            <div className={"solutionList"}>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/Web.png")}/>
                    <p>Desarrollo de plataformas WEB</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/Mobile.png")}/>
                    <p>Desarrollo de plataformas Móviles</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/digitalMkt.png")}/>
                    <p>Estrategias para generar fuerte presencia en línea</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/digitalOptimization.png")}/>
                    <p>Optimización de plataformas digitales</p>
                </div>
            </div>

            <div className={"serviceInfo"}>
                <div className={"dataCont"}>
                    <h2>Estratégicas</h2>
                    <p>Si ya cuentas con herramientas clave dentro de tu empresa, pero no
                        sabes cómo unificarlo ¡no te preocupes ¡Seremos tu apoyo estratégico para que
                        puedas visualizar tus objetivos a mediano y a corto plazo! Te ayudaremos a desarrollar tu
                        negocio a través del crecimiento que mejor se adapte a tu mercado y a tu negocio principal. </p>
                </div>
                <img alt={"Service"} src={require("../Assets/strategy.png")}/>
            </div>
            <div className={"solutionList"}>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/chess.png")}/>
                    <p>Solución estratégica 1</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/chess.png")}/>
                    <p>Solución estratégica 2</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/chess.png")}/>
                    <p>Solución estratégica 3</p>
                </div>
            </div>

            <div className={"serviceInfo"}>
                <div className={"dataCont"}>
                    <h2>Recursos Humanos</h2>
                    <p>Un factor clave en el optimo funcionamiento de cualquier empresa es tener un fuerza laboral talentosa y leal,
                    nosotros te ayudaremoa a atraer, entender, seleccionar y retener a recurso humano capaz de dar los mejores
                    resultados para tu empresa</p>
                </div>
                <img alt={"Service"} src={require("../Assets/humanResource.png")}/>
            </div>
            <div className={"solutionList"}>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/rhIcon.png")}/>
                    <p>Solución de RH 1</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/rhIcon.png")}/>
                    <p>Solución de RH 2</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/rhIcon.png")}/>
                    <p>Solución de RH 3</p>
                </div>
            </div>

        </div>
    )
}

export default Solutions;