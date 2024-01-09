import style from "../Projects/Projects.module.css";
import 'animate.css';

export function Projects({id}){
    return (
        <div id = {id} className={style.container}>
            <div className={style.son}>
                <h1>Mis proyectos</h1>
            </div>
        <div className={style.containerSon}>
        <div className={style.son2}>
            <div className={style.sonp}>
                <p>Proyecto dedicado a los servicios de cualquier tipo...</p>
                <a href="https://workify-alpha.vercel.app/home">Visitar</a>
            </div>
        </div>
        <div className={style.son3}>
            <div className={style.sonp}>
                <p>Juego de memoria</p>
                <a href="https://memory-game-psi-murex.vercel.app/">Visitar</a>
            </div>
        </div>
        <div className={style.son4}>
            <div className={style.sonp}>
                <p>Pokédex</p>
                <a href="https://pokedex-eight-rho.vercel.app/">Visitar</a>
            </div>
        </div>
         <div className={style.son1}>
            <div className={style.sonp}>
                <p>Grosgar una aplicación de servicios contables</p>
                <a href="https://grosgar.vercel.app/">Visitar</a>
            </div>
        </div>
        </div>
        </div>
        
    );
}