import style from "../Projects/Projects.module.css";
import "animate.css";

export function Projects({ id }) {
  const projects = [
    {
      id: 1,
      title: "Proyecto dedicado a los servicios de cualquier tipo...",
      link: "https://workify-alpha.vercel.app/home",
      styleClass: style.son2,
    },
    {
      id: 2,
      title: "Juego de memoria",
      link: "https://memory-game-psi-murex.vercel.app/",
      styleClass: style.son3,
    },
    {
      id: 3,
      title: "Pokédex",
      link: "https://pokedex-eight-rho.vercel.app",
      styleClass: style.son4,
    },
    {
      id: 4,
      title: "Grosgar una aplicación de servicios contables",
      link: "https://grosgar.vercel.app/",
      styleClass: style.son1,
    },
    {
        id: 5,
        title: "Binkio",
        link: "https://app.binkio.io/",
        styleClass: style.son5,
      },
  ];

  return (
    <main id={id} className={style.container}>
      <header className={style.title}>
        <h2>MIS PROYECTOS</h2>
        <h1>Mis proyectos</h1>
      </header>

      <aside className={style.containerSon}>
        {projects.map((project) => (
          <article key={project.id} className={project.styleClass}>
            <div className={style.sonp}>
              <p>{project.title}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visitar
              </a>
            </div>
          </article>
        ))}
      </aside>
    </main>
  );
}
