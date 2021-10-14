import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const UseAuth = () => {
    return (
        useContext(AuthContext)
    );
}

