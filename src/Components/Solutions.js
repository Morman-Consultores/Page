import React from "react";

const Solutions = () => {
    return (
        <div className={"solutionCont"}>
            <h1>Nuestras Soluciones</h1>

            <div id={"Estrategico"} className={"serviceInfo"}>
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
                    <img alt={"Service"} src={require("../Assets/king.png")}/>
                    <p>Desarrollo de KPI´s a mediano y largo plazo </p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/queen.png")}/>
                    <p>Análisis operativos para optimización clave de recursos</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/alfil.png")}/>
                    <p>Lecturas de tiempos y de Lead Time para mejorar el tiempo de entrega de productos o servicios. </p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/chess.png")}/>
                    <p>Desarrollo de estrategias comerciales basados en la facturación anual deseada.</p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/tower.png")}/>
                    <p>Capacitación a vendedores para mejora de habilidades blandas enfocadas en la negociación y cierre de ventas. </p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/pawn.png")}/>
                    <p>Creación de red y cuidado personalizado para dar seguimiento a tus clientes nuevos y actuales. </p>
                </div>
            </div>

            <div id={"Digital"} className={"serviceInfo"}>
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

            <div id={"RH"} className={"serviceInfo"}>
                <div className={"dataCont"}>
                    <h2>Recursos Humanos</h2>
                    <p>En MORMAN no creemos en el recorte del personal, creemos en la correcta motivación y
                        capacitación que otorgan las empresas a sus colaboradores. Así como el respeto a la
                         integridad y derecho humano, recuerda que antes de ser empleados, son humanos </p>
                </div>
                <img alt={"Service"} src={require("../Assets/humanResource.png")}/>
            </div>
            <div className={"solutionList"}>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/poll.png")}/>
                    <p>Desarrollo de encuestas de NPS tropicalizadas a tu industria y sector. </p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/motivation.png")}/>
                    <p>Evaluación de motivaciones por desempeño para incrementar la productividad de tu personal. </p>
                </div>
                <div className={"iconSol"}>
                    <img alt={"Service"} src={require("../Assets/jobPosition.png")}/>
                    <p>Definir perfil vs posición para enfocar a las personas en sus puestos ideales, no en sus puestos descriptivos</p>
                </div>
            </div>

        </div>
    )
}

export default Solutions;