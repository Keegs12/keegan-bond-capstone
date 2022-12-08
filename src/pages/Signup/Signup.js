import "./Signup.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";

function Signup(props) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            password: e.target.password.value,
        };
        axios
            .post("http://localhost:8080/users/register", newUser)
            .then((response) => {
                setSuccess(true);
                setError("");
                e.target.reset();
            })
            .catch((e) => {
                setSuccess(false);
                setError(e.response.data);
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="first_name"
                    label="First Name"
                    placeholder="Enter your First Name"
                />
                <Input
                    type="text"
                    name="last_name"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                />
                <Input
                    type="text"
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                />
                <Input
                    type="text"
                    name="address"
                    label="Address"
                    placeholder="Enter your Address"
                />
                <Input
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Enter your Email"
                />
                <Input
                    type="text"
                    name="password"
                    label="Password"
                    placeholder="Enter your Password"
                />

                <button type="submit">Sign up</button>
            </form>
            <p>
                Already have an account?{" "}
                <Link to="/users/login">Log in here</Link>
            </p>
        </div>
    );
}

export default Signup;
