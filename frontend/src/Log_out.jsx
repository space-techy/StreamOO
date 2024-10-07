import { AuthContext } from "./auth/Authcontext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function LogoutWay(){
    const { user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        logout();
        navigate("/login");
    },[]);
    
    return ;
}

export default LogoutWay;