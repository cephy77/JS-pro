import style from "./NavBar.module.css";
import NavElement from "./NavElement";

function NavBar() {
  return (
    <nav>
      <ul className={style.pageNav}>
        <NavElement txt="About" />
        <NavElement txt="Store" />
        <NavElement txt="Contacts" />
        <NavElement txt="Cart" />
      </ul>
    </nav>
  );
}

export default NavBar;
