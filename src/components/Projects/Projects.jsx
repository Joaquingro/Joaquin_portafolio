import style from "../Projects/Projects.module.css";
import 'animate.css';

export function Projects({id}){
    return (
        <main id = {id} className={style.container}>
           <header className={style.title}>
                <h2>MIS PROYECTOS</h2>
                <h1>Mis proyectos</h1>
            </header>
            
        <aside className={style.containerSon}>
        <section className={style.son2}>
            <div className={style.sonp}>
                <p>Proyecto dedicado a los servicios de cualquier tipo...</p>
                <a href="https://workify-alpha.vercel.app/home" target="_blank" rel="noopener noreferrer">Visitar</a>
            </div>
        </section>

        <section className={style.son3}>
            <div className={style.sonp}>
                <p>Juego de memoria</p>
                <a href="https://memory-game-psi-murex.vercel.app/" target="_blank" rel="noopener noreferrer">Visitar</a>
            </div>
        </section>

        <section className={style.son4}>
            <div className={style.sonp}>
                <p>Pokédex</p>
                <a href="https://pokedex-eight-rho.vercel.app" target="_blank" rel="noopener noreferrer">Visitar</a>
            </div>
        </section>

         <section className={style.son1}>
            <div className={style.sonp}>
                <p>Grosgar una aplicación de servicios contables</p>
                <a href="https://grosgar.vercel.app/" target="_blank" rel="noopener noreferrer">Visitar</a>
            </div>
        </section>

        </aside>
        </main>
        
    );
}