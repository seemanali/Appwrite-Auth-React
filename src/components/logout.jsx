import React, { useEffect } from 'react'
import authservice from '../appwriteservice/service'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducusersFile';
import { Loader } from 'lucide-react';

function Logout() {
const navigate  = useNavigate();
const dispatch = useDispatch();





async function anotherfunction(){
  let data = await authservice.logoutfunction();
  if(data.success){
    dispatch(logout());
    localStorage.removeItem("appwriteauthProjects")
    navigate("/")
  }
  else{
    // console.log(data.error)
  }
}

  useEffect(() => {
    anotherfunction()
  
  }, [])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <Loader/>
      <h1 className='text-xl text-blue-500'>Logging Out</h1>
    </div>
  </div>
  )
}

export default Logout
