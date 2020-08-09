import React from "react";
import Intro from "./Intro";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ContactUs = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const notify = (data) => toast.dark(data, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    });
    const onSubmit = (data) => {
        console.log(data.name, data.email, data.message)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            })
        };
        fetch('https://mormanapi.herokuapp.com/submit', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data){
                    reset();
                    notify(data);
                    console.log(data)
                }
            });
    }
    return(
        <div>
            <Intro index={props.index}/>
            <div className={"formCard"}>
                <h3>CONTÁCTANOS</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className={"inputStyle"} type={"text"} name={"name"} placeholder={"Nombre"} ref={register({ required: true })}/>

                    <input className={"inputStyle"} type={"email"} name={"email"} placeholder={"Correo electrónico"} ref={register({ required: true })} />

                    <label>Mensaje:</label>
                    <textarea className={"inputStyle message"} name={"message"} ref={register({required: true})}/>

                    <input className={"submitBtn"} type="submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactUs;