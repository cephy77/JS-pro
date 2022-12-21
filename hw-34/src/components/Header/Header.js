import style from "./Header.module.css";
import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header_content}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
