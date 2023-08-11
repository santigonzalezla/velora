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
        try {
            const token = cookies.get('auth-cookie');
            const decoded = jwt(token);
            if (decoded.userType === '1') {
                const response = await fetch(`${apiURL}/verifyToken`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "tokenJWT": cookies.get('auth-cookie') || '' }),
                });

                if (response.ok) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false);
                    return navigate('/');
                }
            } else {
                setIsLoggedIn(false);
                return navigate('/');
            }
        } catch (error) {
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