import { useContext, useEffect,  } from "react";
import { AuthContext } from "./Authcontext";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children })=>{
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate("/login");
        }
    },[]);
    return children;
}

export default ProtectedRoutes;