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
        Characters from Rick and Morty are not products. Just because this API
        is most suitable for our purpose. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
