import React from "react";

const Hamburger = (props) => {
    return (
        <span>
            <input onChange={() => props.openMenu(!props.isOpen)} checked={props.isOpen} type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden"/>
            <label  htmlFor="checkbox3">
                <div className="hamburger hamburger3">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </span>
    );
}

export default Hamburger;