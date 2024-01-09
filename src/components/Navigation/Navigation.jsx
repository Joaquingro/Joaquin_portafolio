import style from "../Navigation/Navigation.module.css";
import 'animate.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export function Navigation() {
    
      
    return (
    <div className={style.container} >
        <div className={style.son} >
            <AnchorLink href="#home">Inicio</AnchorLink>
        </div>
        <div className={style.son} >
            <AnchorLink href="#school">Acerca de mi</AnchorLink>
        </div>
        <div className={style.son}>
            <AnchorLink href="#projects">Proyectos</AnchorLink>
        </div>
        <div className={style.son}>
            <AnchorLink href="#contact">Contáctame</AnchorLink>
        </div>
       
        
    </div>
  );
};