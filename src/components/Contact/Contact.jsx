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

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
      });
    

      const handleValidation = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };
    
        if (!inputs.name.trim()) {
          newErrors.name = 'Nombre es requerido';
          isValid = false;
        }
    
        if (!inputs.email.trim()) {
          newErrors.email = 'Correo electrónico es requerido';
          isValid = false;
        }
    
        if (!inputs.message.trim()) {
          newErrors.message = 'Mensaje es requerido';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (handleValidation()) {
          // Realizar acciones del formulario aquí si la validación es exitosa
          console.log('Formulario enviado:', inputs);
          e.target.submit();
          setInputs({
            name: "",
            email: "",
            message: "",
          })

        } else {
          console.log('Formulario inválido. Corrige los errores.');
        }
      };

   
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

        <form onSubmit={handleSubmit} className={style.formContainer1} action="https://formspree.io/f/xbjewvqa"
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
            error={!!errors.name}
            helperText={errors.name}
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
            error={!!errors.email}
            helperText={errors.email}
          />
        </div>
        </article>
        
        <article className={style.formFather1}>
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
        fontFamily: 'inherit',
        borderRadius: '4px',
        resize: 'vertical',
        border: errors.message ? '1px solid red' : '1px solid #ced4da',
        }}
        />
        {errors.message && (
            <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '4px' }}>
            {errors.message}
            </span>
        )}

            <button type="submit" className={style.send}>Enviar</button>
        </article>
        
        </form>


        </aside>
        <footer className={style.foot}>
            <p>Joaquin Guerrero - Full Stack Developer</p>
        </footer>
    </main>
    );
}