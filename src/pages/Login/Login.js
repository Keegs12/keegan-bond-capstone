import "./Login.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Input/Input";
function Login({ updateLogin }) {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginUser = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log(loginUser);

        axios
            .post("http://localhost:8080/users/login", loginUser)
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                updateLogin(loginUser);
                navigate("/profile");
            })
            .catch((e) => {
                setError(true);
                alert(e);
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="email"
                    placeholder="Please Enter your Email"
                    label="Email"
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Please Enter your Password"
                    label="Password"
                />

                <button>Login</button>
            </form>
            <p>
                Need an account?
                <Link to="/users/signup">Signup here</Link>
            </p>
        </div>
    );
}

export default Login;
