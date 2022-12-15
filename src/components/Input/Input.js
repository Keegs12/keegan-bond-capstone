import "./Input.scss";

function Input({ name, label, type, placeholder, onChange, accept, required }) {
    return (
        <div className="form-input-container">
            <label className="form-input-label" htmlFor={name}>
                {label}
            </label>
            <input
                required={required ? required : null}
                className="form-input"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                accept={accept}
            ></input>
        </div>
    );
}

export default Input;
