import style from "./Loader.module.css";

function Loader(props) {
  let display = { display: "inline-block" };
  if (props.loaded) {
    display = { display: "none" };
  }

  return (
    <div className={style.ldsellipsis} style={display}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
export default Loader;
