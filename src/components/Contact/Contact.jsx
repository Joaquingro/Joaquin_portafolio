import style from "../Contact/Contact.module.css";
import 'animate.css';
import form from "../../assets/Form.png";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';

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
    <main id= {id} className={style.container}>
        
        <header className={style.title2}>
                <h2>CONTACTO</h2>
                <h1>Contacto</h1>
            </header>
       
        <aside className={style.sonContact}>

        <article className={style.broSon}>
            <img src={form} alt="form"/>
        </article>

        <form className={style.formContainer1} action="https://formspree.io/f/xbjewvqa"
            method="POST">
        <article className = {style.title}>
            <h1>¿Te gusto mi trabajo? ¡Contáctame!</h1>
        </article>

        <article className={style.formFather}>
            <div>
          <TextField
            label="Nombre"
            name="name"
            type="name"
            value={inputs.name}
            onChange={handleInput}
            fullWidth
          />
        </div>

        <div>
          <TextField
            label="Correo electrónico"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInput}
            fullWidth
          />
        </div>
            </article>

            <TextareaAutosize
            label="Mensaje"
            name="message"
            value={inputs.message}
            onChange={handleInput}
            minRows={3}
            placeholder="Escribe tu mensaje aquí"
             style={{
            width: '60%',
            marginTop: '16px',
            padding: '8px',
            
            borderRadius: '4px',
            resize: 'vertical', // Para permitir redimensionar verticalmente
          }}
            />
        
            <button type="submit" className={style.send}>Enviar</button>
        </form>


        </aside>
        <footer className={style.foot}>
            <p>Joaquin Guerrero - Full Stack Developer</p>
        </footer>
    </main>
    );
}