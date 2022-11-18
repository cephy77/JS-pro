import style from "./Footer.module.css";
import Contact from "./Contact";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contacts}>
        <Contact type="email" content="e@mail.gnome" />
        <Contact type="phone" content="+380114206942" />
      </div>
      <div className={style.info}>
        Some info that can be useful, but I never pay attention to that. Ah, of
        cource... All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
