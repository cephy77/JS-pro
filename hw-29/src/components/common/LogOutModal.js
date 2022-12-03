import { Component } from "react";
import style from "./LogOutModal.module.css";

class LogOutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleY: "0, -70vh",
      opacity: "0",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ scaleY: "0,0", opacity: "1" });
    }, 400);
  }
  render() {
    return (
      <div className={style.screen} style={{ opacity: this.state.opacity }}>
        <div
          className={style.modal}
          style={{ transform: `translate(${this.state.scaleY})` }}
        >
          <div className={style.modal_header}>Are you still there?</div>
          <p>We are worry about you. Is everything OK?</p>
          <button
            onClick={() => {
              this.setState({ scaleY: "0, -70vh", opacity: "0" });
              setTimeout(this.props.reset, 600);
            }}
          >
            Yes, Sir!
          </button>
        </div>
      </div>
    );
  }
}
export default LogOutModal;
