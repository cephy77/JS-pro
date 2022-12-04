import style from "./NavElement.module.css";
function NavElement(props) {
  return (
    <li className={style.element}>
      <a href="/">{props.txt}</a>
    </li>
  );
}

export default NavElement;
