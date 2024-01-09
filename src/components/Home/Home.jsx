
import * as React from 'react';
import style from "../Home/Home.module.css";
import Joaquin from "../../assets/Joaquis.png";
import 'animate.css';
import link from "../../assets/link.png";
import git from "../../assets/git.png";

export function Home({id}){
    return(
    <section id = {id} className={style.father}>
        <div className={style.container}>
        
            <div className={style.image}>
            
                <img className='animate__animated animate__fadeIn animate_slow' src={Joaquin} alt='Joaquin'/>
            
                </div>
        </div>
        

        <div className={style.container2}>
            <div className={style.txt} >
                <h3 className="animate__animated animate__backInLeft animate__slow">¡Hola!</h3>
                <h1 className="animate__animated animate__backInRight animate__slow">Soy Joaquin Guerrero</h1>
                <p className="animate__animated animate__backInLeft animate__slow" >Ingeniero en Sistemas Computacionales </p>
                <p className="animate__animated animate__backInRight animate__slow"> & Desarrollador Web Full Stack</p>
            </div>
            
        </div>
        <div className={style.container3}>
                 <a href = "https://www.linkedin.com/in/joaquin-guerrero-728826260/">
                <img className = {style.linked} src = {link} alt = "LinkedIn"/>
                </a>
                <a href = "https://github.com/Joaquingro">
                <img className={style.git} src = {git} alt = "Github"/>
                 </a>

            </div>
    </section>
    );
} 