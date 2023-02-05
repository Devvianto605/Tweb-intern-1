import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useBearStore from '../../store/store';

const GuestGuard = () => {
    const auth = useBearStore((state)=>state.token)
    return auth ? <Outlet /> : <Navigate to="/auth/signin" />;
    
}

export default GuestGuard;
