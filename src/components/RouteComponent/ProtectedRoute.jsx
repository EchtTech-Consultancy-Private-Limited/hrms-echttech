import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'; 
import { useSelector } from 'react-redux';
import LayoutComponent from '../shared/LayoutComponent';


const ProtectedRoutesLayout = () => {
    const [result, setResult] = useState(false); // State to track token validation result
    const navigate = useNavigate(); // Assuming you're using react-router-dom for navigation

    const validateToken = async () => {
        try {
            const token = localStorage.getItem("token");
            
            if (!token) {
                throw new Error("No token found"); // If there's no token, throw an error
            }

            const decodedToken = jwtDecode(token); // Decode the token
            const currentDate = new Date();

            // Check if the token has expired (exp is in seconds, so multiply by 1000 to get milliseconds)
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                setResult(false); // Token expired
                navigate('/login');
            } else {
                setResult(true); // Token valid
            }
        } catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('mid');
            setResult(false); // Handle the invalid token
            navigate('/');
            console.error("Token validation error:", error.message);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            validateToken(); // Call the token validation function if token exists
        } else {
            navigate('/login'); // If no token, redirect to login
        }
    }, []);

    return (
        <>
            {result && <LayoutComponent />} {/* Render LayoutComponent only if result is true */}
        </>
    );
};

export default ProtectedRoutesLayout