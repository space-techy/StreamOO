import React from "react";
import { Link } from "react-router-dom";


function Login(){
    return(
        <>
            <div>
                <form action="/login" method="post">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <Link to="/register">Not Registered? Register Here!</Link>
            </div>
        </>
    );
}

export default Login;
