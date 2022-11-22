// import style from "./Contact.module.css";
function Contact(props) {
  if (props.type === "email") {
    return <a href={"mailto:" + props.content}>{props.content}</a>;
  } else {
    return <a href={"tel:" + props.content}>{props.content}</a>;
  }
}

export default Contact;
