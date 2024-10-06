import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form"; 
import axios from "axios";

function Register(){

    const {register, handleSubmit , formState: {errors}} = useForm();
    const [gotError, addError] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{},[gotError]);

    const registerUser = async(info)=>{
        const data = {
            name: info.name,
            email: info.email,
            password: info.password,
        }
        try{
            const response = await axios.post("http://localhost:3000/register",data);
            if(response.data.success){
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
                    <input type="text" placeholder="Name" name="name" {...register("name", {required: true})} />
                    <input type="text" placeholder="Email" name="email"  {...register("email", {required: true})}/>
                    {errors.email ? <span>Email is required</span>: <></>}
                    <input type="password" placeholder="Password" name="password"  {...register("password", {required: true})}/>
                    {errors.password ? <span>Password is required</span>: <></>}
                    <button>Register</button>
                </form>
                <Link to="/login">Already Registered? Login Then!</Link>

            </div>
        </>
    );
}

export default Register;