import "./Button.css";

function Button({ title = "Button" }) {
  return (
    <div>
      <button className="btn btn-grad">{title}</button>
    </div>
  );
}

export default Button;
