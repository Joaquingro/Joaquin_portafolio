import style from "../Contact/Contact.module.css";
import 'animate.css';
import form from "../../assets/Form.png";
import { useState } from "react";

export function Contact({id}) {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setInputs({
            ...inputs,
            [name]: value,
        })

    }
   
    return (
    <div id= {id} className={style.container}>
        <div className={style.containerSon}>
            <div className={style.son}>
                <h1>Contáctame</h1>
            </div>
        </div>
        <div className={style.sonContact}>
        <form action="https://formspree.io/f/xbjewvqa"
            method="POST">
        <div className = {style.title}>
            <h1>¿Te gusto mi trabajo? ¡Contáctame!</h1>
        </div>
            <div className={style.formFather}>
                <div className={style.formContainer}>
                    <label htmlFor="name">Nombre</label>
                    <input name="name" type="name" value = {inputs.name} onChange={handleInput}></input>
                </div>
                    <div className={style.formContainer}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input name = "email" type="email" value = {inputs.email} onChange={handleInput}></input>
                </div>  
            </div>
            <div className={style.formMessage}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="message" type="message" value = {inputs.message} onChange={handleInput}></textarea>
            </div>
        
            <button type="submit" className={style.send}>Enviar</button>
        </form>
        <div className={style.broSon}>
            <img src={form} alt="form"/>
        </div>
        </div>
    </div>
    );
}