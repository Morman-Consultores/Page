import React from "react";
import Intro from "./Intro";
import Foot from "./Foot";
import Solutions from "./Solutions";

const Services = (props) => {
    return(
        <div>
            <Intro index={props.index}/>
            <Solutions/>
            <Foot/>
        </div>
    )
}

export default Services;