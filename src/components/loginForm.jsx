import React, { useState, useEffect } from "react";
import TextField from "./common/form/textField";
import validator from "../utils/validatot";

const LoginForm = () => {
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
    const isValid = Object.keys(errors).length === 0;

    const validatorConfig = {
        email: {
            isRequired: { message: "email is required" },
            isEmail: { message: "email incorrect" },
        },
        password: {
            isRequired: { message: "password is required" },
            isCapitalSymbol: {
                message:
                    "password must be include with one or more capital letter",
            },
            isContainDigit: {
                message: "password must be include with a number",
            },
            min: {
                message: "password must be at least 8 characters",
                value: 8,
            },
        },
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
                disabled={!isValid}
            >
                Send
            </button>
        </form>
    );
};
export default LoginForm;
