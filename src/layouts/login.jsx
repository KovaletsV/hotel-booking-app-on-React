import React, { useState, useEffect } from "react";
import TextField from "../components/common/form/textField";
import validator from "../utils/validatot";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState("");
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validatorConfig = {
        email: { isRequired: { message: "email is required" } },
        password: { isRequired: { message: "password is required" } },
    };
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <div className="container m-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow-lg p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="password"
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
