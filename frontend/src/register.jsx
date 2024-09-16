import React from "react";

function Register(){
    return(
        <>
            <div>
                <form action="/register" method="post">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
                <a href="/api/login">Already Registered? Login Then!</a>
            </div>
        </>
    );
}

export default Register;