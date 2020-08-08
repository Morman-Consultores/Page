import React from "react";
import Intro from "./Intro";
import PYMEMessage from "./PYMEMessage";
import ServiceCard from "./ServiceCard";
import ContactButton from "./ContactButton";
import Foot from "./Foot";

const Home = () => {
    return (
        <div>
            <Intro/>
            <PYMEMessage/>
            <h2>Nuestros Servicios</h2>
            <ServiceCard/>
            <ContactButton/>
            <Foot/>
        </div>
    )
}

export default Home;