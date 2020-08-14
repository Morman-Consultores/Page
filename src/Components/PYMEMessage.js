import React from "react";

const PYMEMessage = () => {
    return (
        <div className={"pymeMessage"}>
            <div className={"messageCont"}>
                <h1>Mensaje para las Pymes:</h1>
                <p>En MORMAN nos preocupamos por el crecimiento y desarrollo de las pequeñas y medianas
                    empresas. Estamos consientes que en esta época la situación es aún más complicada, es por esto
                    que nuestra consultora está ofreciendo una sesión de consultoría gratuita para aquellos que lo
                    necesiten, permítenos demostrar que nuestra intención es ayudar y acompañarte en este camino
                    de regreso al éxito de tu empresa.</p>
            </div>
            <div className={"logoCont"}>
                <img alt={"Logo"} src={require('../Assets/Logo_Morman_Blanco.png')}/>
                <img alt={"Logo"} src={require('../Assets/tituloMormanBlanco.png')}/>
            </div>
        </div>
    );
}

export default PYMEMessage;