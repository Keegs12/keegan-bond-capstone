import "./Signup.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";

function Signup(props) {
    const API_URL = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
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
            .post(`${API_URL}/users/register`, newUser)
            .then((response) => {
                setSuccess(true);
                setError("");
                alert("Successfully Registered");
                navigate("/users/login");
                e.target.reset();
            })
            .catch((e) => {
                setSuccess(false);
                setError(e.response.data);
            });
    };
    return (
        <div className="Signup">
            <h2 className="Signup__title">Sign up</h2>
            <form className="Signup__form" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="first_name"
                    label="First Name"
                    placeholder="Enter your First Name"
                    required="true"
                />
                <Input
                    type="text"
                    name="last_name"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    required="true"
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
                    required="true"
                />
                <Input
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Enter your Email"
                    required="true"
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your Password"
                    required="true"
                />

                <button className="Signup__button" type="submit">
                    Sign up
                </button>
            </form>
            <p className="Signup__paragraph">
                Already have an account?{" "}
                <Link className="Signup__link" to="/users/login">
                    Log in here
                </Link>
            </p>
        </div>
    );
}

export default Signup;
