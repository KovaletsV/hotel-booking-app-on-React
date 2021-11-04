import React from "react";
import LoginForm from "../components/loginForm";
import NavBar from "../components/navbar";

const Login = () => {
    // const [formType, setFormtype] = useState("login");
    return (
        <>
            <NavBar />
            <div className="container position-absolute top-50 start-50 translate-middle">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow-lg p-4">
                        <h3 className="mb-4">Login</h3>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
