import React from 'react'
import { Navigate, Routes , Route, Outlet } from "react-router-dom";

import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn';
import AuthGuard from './utils/route-guard/AuthGuard';
import GuestGuard from './utils/route-guard/GuestGuard';

const App = () => {
  return (
    <Routes>
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<Home/>} />
    <Route path="/auth" element={<AuthGuard/>}>
      <Route path="/auth/signin" element={<SignIn/>} />
    </Route>
    <Route path="/dashboard" element={<GuestGuard/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
    
</Routes>
  )
}

export default App