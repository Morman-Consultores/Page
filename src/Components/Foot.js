import React from "react";
import {Link} from "react-router-dom";

const Foot = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer>
            <Link className={"footLink"} to={"/privacidad"}>Aviso de privacidad</Link>
            <p>&copy; MORMAN CONSULTORES {year}</p>
        </footer>
    )
}

export default Foot;