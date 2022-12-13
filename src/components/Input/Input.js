import "./Input.scss";

function Input({ name, label, type, placeholder, onChange, accept }) {
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
                onChange={onChange}
                accept={accept}
            ></input>
            {/* <div className="error-container">
                <p
                    className={
                        error ? "error-message --visible" : "error-message"
                    }
                >
                    This Field is required
                </p>
            </div> */}
        </div>
    );
}

export default Input;
