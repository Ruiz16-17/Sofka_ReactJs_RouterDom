import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { UseAuth } from '../auth/UseAuth';

export default function LoginPage() {

    const auth = UseAuth();
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/");
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Signin
            </button>
        </div>
    )
}
