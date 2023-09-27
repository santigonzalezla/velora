import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;
const cookies = new Cookies();

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = async () => {
        const token = cookies.get('auth-cookie');

        const response = await fetch(`${apiURL}/verifyToken`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "tokenJWT": token  || '' }),
        });

        if (response.ok) {
            setIsLoggedIn(true)
            const data = await response.json();
            console.log(data)
            if (data.data.token) {
                cookies.set('auth-cookie', data.data.token)
            }
        } else {
            setIsLoggedIn(false);
            return navigate('/');
        }

    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;