import React from "react";
import { Link } from "react-router-dom";


function Login(){
    return(
        <>
            <div>
                <form action="/login" method="post">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
                <Link to="/Register">Not Registered? Register Here!</Link>
            </div>
        </>
    );
}

export default Login;
