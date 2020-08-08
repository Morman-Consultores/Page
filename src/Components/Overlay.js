import React from "react";
import ListMenu from "./ListMenu";

const Overlay = (props) => {
    return (
        <div className={"overlay"} style={props.style}>
            <div className={"overlayContent"}>
                <ListMenu
                    setIndex={props.setIndex}
                    openMenu={props.openMenu}
                    isOpen={props.isOpen}
                />
                <h5>&copy; Morman Consultores</h5>
            </div>
        </div>
    )
}

export default Overlay;