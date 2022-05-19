import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;