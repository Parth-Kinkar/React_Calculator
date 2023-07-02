import "./Button.css";

const Button = ({className, onClick, Value}) => {
    return (
        <button className={className} onClick = {onClick}>
            {Value}
        </button>
    );
};

export default Button;