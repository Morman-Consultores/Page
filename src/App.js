import React from 'react';
import HeaderNav from "./Components/HeaderNav";
import Intro from "./Components/Intro";
import './App.css';

function App() {
    let date = new Date();
    let year = date.getFullYear();

  return (
    <div>
        <HeaderNav/>
        <Intro date={date}/>
        <div className={"pymeMessage"}>
            <div className={"messageCont"}>
                <h1>Mensaje para las Pymes:</h1>
                <p>En MORMAN nos preocupamos por el crecimiento y desarrollo de las pequeñas y medianas
                    empresas. Estamos consientes que en esta época la situación es aún más complicada, es por esto
                    que nuestra consultora está ofreciendo una sesión de consultoría gratuita para aquellos que lo
                    necesiten, permítenos demostrar que nuestra intención es ayudar y acompañarte en este camino
                    de regreso al éxito de tu empresa.v</p>
            </div>
            <div className={"logoCont"}>
                <img alt={"Logo"} src={require('./Assets/Logo_Morman_Blanco.png')}/>
                <img alt={"Logo"} src={require('./Assets/tituloMormanBlanco.png')}/>
            </div>
        </div>
        <h2>Nuestros Servicios</h2>
        <div className={"serviceCont"}>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/bussiness.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/bussinessIcon.png')}/>
                    <h3>COMERCIAL</h3>
                    <p>Estudio de crecimiento y
                        desarrollo de fuerza
                        comercial</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/legal.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/legalIcon.png')}/>
                    <h3>LEGAL</h3>
                    <p>Desarrollo de asuntos legales
                        con objetivo de protección
                        empresarial</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/humaResources.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/rhIcon.png')}/>
                    <h3>RECURSOS HUMANOS</h3>
                    <p>Estrategias de crecimiento y
                        desarrollo de Recursos
                        Humanos dentro de la empresa</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/digital.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/digitalIcon.png')}/>
                    <h3>DIGITALES</h3>
                    <p>Desarrollo multiplataforma y estrategias de Mercadotecnia Digital</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/strategy.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/strategyIcon.png')}/>
                    <h3>ESTRATEGICOS</h3>
                    <p>Lorem Ipsum Dolo sit amet
                        consectetur adipiscing eli</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('./Assets/admin.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('./Assets/adminIcon.png')}/>
                    <h3>ADIMNISTRATIVOS</h3>
                    <p>Lorem Ipsum Dolo sit amet
                        consectetur adipiscing eli</p>
                </div>
            </div>
        </div>
        <h2>“Seremos el sastre que te ayudará a fabricar el saco empresarial a tu medida”</h2>
        <button type={"button"} className={"contactButton"}><a href={"mailto:Jmora@morman.page"}>CONTÁCTANOS</a>  </button>
        <footer>
            <p>&copy; MORMAN CONSUTORES {year}</p>
        </footer>
    </div>
  );
}

export default App;
