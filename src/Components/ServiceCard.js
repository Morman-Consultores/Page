import React from "react";

const ServiceCard = () => {
    return (
        <div className={"serviceCont"}>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/bussiness.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/bussinessIcon.png')}/>
                    <h3>COMERCIAL</h3>
                    <p>Estudio de crecimiento y
                        desarrollo de fuerza
                        comercial</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/legal.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/legalIcon.png')}/>
                    <h3>LEGAL</h3>
                    <p>Desarrollo de asuntos legales
                        con objetivo de protección
                        empresarial</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/humaResources.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/rhIcon.png')}/>
                    <h3>RECURSOS HUMANOS</h3>
                    <p>Estrategias de crecimiento y
                        desarrollo de Recursos
                        Humanos dentro de la empresa</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/digital.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/digitalIcon.png')}/>
                    <h3>DIGITALES</h3>
                    <p>Desarrollo multiplataforma y estrategias de Mercadotecnia Digital</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/strategy.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/strategyIcon.png')}/>
                    <h3>ESTRATEGICOS</h3>
                    <p>Lorem Ipsum Dolo sit amet
                        consectetur adipiscing eli</p>
                </div>
            </div>
            <div className={"serviceCard"}>
                <img alt={"Bussines"} src={require('../Assets/admin.png')}/>
                <div className={"cardContent"}>
                    <img alt={"Bussiness"} src={require('../Assets/adminIcon.png')}/>
                    <h3>ADIMNISTRATIVOS</h3>
                    <p>Lorem Ipsum Dolo sit amet
                        consectetur adipiscing eli</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;