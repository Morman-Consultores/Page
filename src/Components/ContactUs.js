import React from "react";
import Intro from "./Intro";
import { useForm } from "react-hook-form";

const ContactUs = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div>
            <Intro index={props.index}/>
            <div className={"formCard"}>
                <h3>CONTÁCTANOS</h3>
                <div id="mc_embed_signup">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className={"inputStyle"} type={"text"} name={"name"} placeholder={"Nombre"} ref={register({ required: true })}/>

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className={"inputStyle"} type={"email"} name={"email"} placeholder={"Correo electrónico"} ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        <label>Mensaje:</label>
                        <textarea className={"inputStyle message"} name={"Message"}></textarea>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className={"submitBtn"} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;