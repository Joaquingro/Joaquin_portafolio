import style from "../School/School.module.css";
import joaquin from "../../assets/joaquin.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

export function School(props) {
  const { id } = props;

  const cvUrl =
    "https://drive.google.com/file/d/11z4YRAoEufwEXxHSmlfhkGKtWU4hjJrf/view?usp=sharing";

  const handleDownload = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <main id={id} className={style.container}>
      <section className={style.son}>
        <header className={style.title}>
          <h2>ACERCA DE MI</h2>
          <h1>Acerca de mi</h1>
        </header>
        <article className={style.baby}>
          <div className={style.imgProfile}>
            <img src={joaquin} alt="Imagen de Joaquin" />
          </div>

          <div className={style.info}>
            <h3>¡Hola, soy Joaquin Guerrero!</h3>
            <h4>Desarrollador Web Full Stack</h4>
            <p>
              {" "}
              Soy un apasionado desarrollador Web Full Stack e Ingeniero en
              Sistemas con un enfoque creativo y soluciones innovadoras. Con una
              sólida formación en Ingeniería de Sistemas y una pasión innata por
              la programación, he dedicado mi carrera a convertir ideas en
              experiencias digitales impactantes.{" "}
            </p>

            <span className={style.target}>
              <p>Cumpleaños </p>
              <ArrowForwardIosIcon className={style.arrow} />
              <p>03-Abril-1996</p>
            </span>
            <span className={style.target}>
              <p>Teléfono</p>
              <ArrowForwardIosIcon className={style.arrow} />
              <p>+52 5549511434</p>
            </span>
            <span className={style.target}>
              <p>Email</p>
              <ArrowForwardIosIcon className={style.arrow} />
              <p>joaquinsgro@gmail.com</p>
            </span>
            <span className={style.target}>
              <p>Idiomas</p>
              <ArrowForwardIosIcon className={style.arrow} />
              <p>Español (Nativo) - Inglés (B1) </p>
            </span>

            <Button
              sx={{
                borderColor: "orange",
                color: "orange",
                width: "max-content",
                borderRadius: "15px",
                marginTop: "1em",
              }}
              variant="outlined"
              onClick={handleDownload}
            >
              Descargar CV
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
