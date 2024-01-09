import style from "../School/School.module.css";

export function School(props) {
    const {id} = props;
    return (
    <div id = {id} className={style.container}>
        <div className={style.son}>
            <div className={style.baby}>
                <h1>Te cuento algo sobre mi...</h1>
                <p>¡Hola, soy Joaquin Guerrero, un apasionado desarrollador web Full Stack e Ingeniero en Sistemas con un enfoque creativo y soluciones innovadoras!
                Con una sólida formación en Ingeniería de Sistemas y una pasión innata por la programación, he dedicado mi carrera a convertir ideas en experiencias digitales impactantes. Mi enfoque integral y habilidades tanto en el frontend como en el backend me permiten crear soluciones completas y eficientes.</p>
            </div>
        </div>
    </div>
    );
}