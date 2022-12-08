import "./Input.scss";

function Input({ name, label, type, placeholder }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default Input;
