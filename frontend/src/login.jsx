import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./auth/Authcontext";
import axios from "axios";

function Login(){

    const {register, handleSubmit , formState: {errors}} = useForm();
    const [gotError, addError] = useState('');
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate();

    if(user){
        navigate("/");
    }

    useEffect(()=>{},[gotError]);

    const registerUser = async(info)=>{
        const data = {
            email: info.email,
            password: info.password,
        }
        try{
            const response = await axios.post("http://localhost:3000/login",data);
            if(response.data.success){
                login(response.data.token);
                navigate("/");
            }
        } catch(error) {
            if(error.response){
                console.log(error);
                addError(error.response.data.message);
            } else {
                console.log(error);
                addError(error.message);
            }
        }
    }

    return(
        <>  
            {gotError ? 
                <div className="error-register">
                    <p>{gotError}</p>
                </div>
                : 
                <></>
            }
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder="Email" name="email"  {...register("email", {required: true})}/>
                    {errors.email ? <span>Email is required</span>: <></>}
                    <input type="password" placeholder="Password" name="password"  {...register("password", {required: true})}/>
                    {errors.password ? <span>Password is required</span>: <></>}
                    <button>Login</button>
                </form>
                <Link to="/register">Not Registered? Register </Link>

            </div>
        </>
    );
}

export default Login;
