import style from "./Header.module.css";
import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
