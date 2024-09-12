import React from "react";


function Login(){
    return(
        <>
            <div>
                <form action="/login" method="post">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
                <a href="http://localhost:3000/Register">Not Registered? Register Here!</a>
            </div>
        </>
    );
}

export default Login;
