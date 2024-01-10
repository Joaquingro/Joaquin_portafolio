
import * as React from 'react';
import style from "../Home/Home.module.css";
import 'animate.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Home({id}){
    return(
    <section id = {id} className={style.father}>
        
        

        <main className={style.container2}>
            <article className={style.txt} >
                
                <div className="animate__animated animate__backInRight animate__slow">
                    <h2>¡Hola!</h2>
                     <h1>Soy Joaquin Guerrero</h1>
                </div>
                
                <p className="animate__animated animate__backInRight animate__slow"> Soy un apasionado Desarrollador Web Full Stack e Ingeniero en Sistemas, comprometido con la excelencia en la creación de soluciones tecnológicas eficientes y elegantes</p>

                <footer className={style.foot}>
                <a href="https://www.linkedin.com/in/joaquin-guerrero-728826260/" className={style.iconLink} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className={style.icon} />
                </a>
                <a href="https://github.com/Joaquingro" className={style.iconLink} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className={style.icon} />
                </a>
                <a href="https://wa.me/5549511434" className={style.iconLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className={style.icon} />
                </a>
                </footer>
            </article>
            
        </main>
        
    </section>
    );
} 