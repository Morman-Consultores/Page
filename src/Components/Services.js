import React from "react";
import Intro from "./Intro";
import Foot from "./Foot";
import Solutions from "./Solutions";
import ContactButton from "./ContactButton";

const Services = (props) => {
    return(
        <div>
            <Intro index={props.index}/>
            <Solutions/>
            <ContactButton/>
            <Foot/>
        </div>
    )
}

export default Services;