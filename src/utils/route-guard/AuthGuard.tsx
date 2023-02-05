import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useBearStore from '../../store/store';

const AuthGuard = () => {
    const auth = useBearStore((state)=>state.token)
    return auth ? <Navigate to="/dashboard" /> : <Outlet /> ;
}

export default AuthGuard;
