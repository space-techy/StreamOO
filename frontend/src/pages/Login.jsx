import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../configs/Authcontext";
import axios from "axios";

function Login(){

    const {register, handleSubmit , formState: {errors}} = useForm();
    const [gotError, addError] = useState('');
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home if the user is already logged in
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user,navigate]);


    useEffect(()=>{},[gotError]);
    

    const registerUser = async(info)=>{
        const data = {
            email: info.email,
            password: info.password,
        }
        try{
            const response = await axios.post(`${import.meta.env.VITE_MOVIE_UPLOAD_URL}/login`,data);
            console.log(import.meta.env.VITE_MOVIE_UPLOAD_URL);
            if(response.data.success){
                login(response.data.token, response.data.username);
                navigate("/", {replace: true});
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
            <div className="flex flex-col justify-center items-center h-[100vh] text-white" style={{ "background":" radial-gradient(circle at center, rgba(65,74,92,1) 5%, rgba(0,0,0,1) 80%)"}}>
                <div className="flex h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 w-[25vw] bg-[rgba(0,0,0,0.5)] rounded-xl border-2 border-slate-600 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="./images/logo.svg" alt="StreamOO" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-white">
                        <form className="space-y-6" onSubmit={handleSubmit(registerUser)}>
                            <label htmlFor="email" className="block text-sm font-medium leading-[0.25rem] ">Email : </label>
                            <div className="mt-2">
                                <input type="text" placeholder="  Email" name="email"  {...register("email", {required: true})}   className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-800 pl-2"/>
                                {errors.email ? <span>Email is required</span>: <></>}
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 ">Password : </label>
                                </div>
                                <div className="mt-2">
                                    <input type="password" placeholder="  Password" name="password"  {...register("password", {required: true})}   className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 bg-slate-800"/>
                                    {errors.password ? <span>Password is required</span>: <></>}
                                </div>
                            </div>
                            <div>
                                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not Registered? 
                            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
