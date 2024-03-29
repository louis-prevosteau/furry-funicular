import { Fragment } from "react";
import "../../styles/post.css";

//Encadré contenant un poste
const postButton = (props) => {
  return (
    <Fragment>
      <button
        className="button1"
        name={props.text}
        value={props.text}
        onClick={props.url}
      >
        {props.text}
      </button>
    </Fragment>
  );
};

export default postButton;
