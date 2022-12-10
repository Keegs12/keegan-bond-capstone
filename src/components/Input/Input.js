import "./Input.scss";

function Input({ name, label, type, placeholder }) {
    return (
        <div className="form-input-container">
            <label className="form-input-label" htmlFor={name}>
                {label}
            </label>
            <input
                className="form-input"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default Input;
