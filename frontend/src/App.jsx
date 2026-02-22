import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import getCurrentUser from './customHooks/getCurrentUser'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import ForgetPassword from './pages/ForgetPassword'
import EditProfile from './pages/EditProfile'
export const serverUrl ="http://localhost:8000"

function App() {
  getCurrentUser()
  const {userData} =useSelector(state=>state.user)
  return (
    <>
    <BrowserRouter>
     <ToastContainer />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={ !userData ? <SignUp/> : <Navigate to={"/"}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/forget" element={ <ForgetPassword/> }/>
      <Route path="/editprofile" element={ <EditProfile/> }/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App