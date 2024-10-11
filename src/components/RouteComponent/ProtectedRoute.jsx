import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

const ProtectedRoutesLayout = () => {
    const navigate = useNavigate();
    if(localStorage.getItem("token")===null){
        navigate('/');
    }else{
        var decodedToken = jwtDecode(localStorage.getItem("token"));
    }
    let currentDate = new Date();
    const validateToken = async()=> {
        try{
            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
            // console.log("Token expired.");
            const result = false;
            } else {
            //console.log("Valid token");   
            const result = true;
            }
        }catch (error) {
            localStorage.removeItem('token');
            //message.error(error.message);
        // dispatch(HideLoading())
            navigate('/');
            }
        }
        useEffect(() => {
            if(localStorage.getItem('token')){
                validateToken();
            }else{
                navigate('/');
            }
        }, []);
  return (
    <>
        {/* {result && <Outlet/> } */}
    </>
  )
}

export default ProtectedRoutesLayout