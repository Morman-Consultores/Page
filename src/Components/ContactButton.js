import React from "react";

const ContactButton = () => {
    return (
        <span>
            <h2>“Seremos el sastre que te ayudará a fabricar el saco empresarial a tu medida”</h2>
            <button type={"button"} className={"contactButton"}><a href={"mailto:Jmora@morman.page"}>CONTÁCTANOS</a>  </button>
        </span>
    )
}

export default ContactButton;