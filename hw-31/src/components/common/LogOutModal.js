import { useEffect, useState } from "react";
import style from "./LogOutModal.module.css";

function LogOutModal(props) {
  const [inlineStyle, setInlineStyle] = useState({
    scaleY: "0, -70vh",
    opacity: "0",
  });
  useEffect(() => {
    setTimeout(() => {
      setInlineStyle({ scaleY: "0,0", opacity: "1" });
    }, 400);
  }, []);

  return (
    <div className={style.screen} style={{ opacity: inlineStyle.opacity }}>
      <div
        className={style.modal}
        style={{ transform: `translate(${inlineStyle.scaleY})` }}
      >
        <div className={style.modal_header}>Are you still there?</div>
        <p>We are worry about you. Is everything OK?</p>
        <button
          onClick={() => {
            setInlineStyle({ scaleY: "0, -70vh", opacity: "0" });
            setTimeout(props.reset, 600);
          }}
        >
          Yes, Sir!
        </button>
      </div>
    </div>
  );
}
export default LogOutModal;
