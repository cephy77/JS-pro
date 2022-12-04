import style from "./About.module.css";
import portal from "../../../portal.png";

function About() {
  return (
    <div className={style.about}>
      <h2>About Us</h2>
      <div className={style.imgntxt}>
        <img src={portal} alt="Rick n Morty" />
        <article>
          <span>Rick And Morty</span>I dont event watch this series. Such topic
          of this page was chosen just because there are API with pictures. And
          I need to type here something.
        </article>
      </div>
    </div>
  );
}

export default About;
