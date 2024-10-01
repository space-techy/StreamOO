import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return(
        <>
            <div>
                <form action="/api" method="post">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
                <Link to="/login">Already Registered? Login Then!</Link>

            </div>
        </>
    );
}

export default Register;