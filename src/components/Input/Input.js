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
            {/* <div className="error-container">
                <p
                    className={
                        value ? "error-message" : "error-message --visible"
                    }
                >
                    This Field is required
                </p>
            </div> */}
        </div>
    );
}

export default Input;
