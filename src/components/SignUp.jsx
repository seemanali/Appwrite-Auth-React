import React, { useState } from "react";
import authservice from "../appwriteservice/service";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpForm = () => {
            const navigate = useNavigate();
  const [Name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errormessage, seterrormessage] = useState("")



  async function submitHandleFunction(e) {
    e.preventDefault();
    if (Name != "" && email != "" && password != "") {
      const accountStatus = await authservice.signupfunction(Name, email, password);
      if(accountStatus.success){
          navigate("/login")
      }
      else{
        seterrormessage(accountStatus.error)
      }      
    
    }
    else {
      seterrormessage("All fieilds are Required")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <p className="text-center text-xl text-blue-500">{errormessage}</p>
        <form onSubmit={submitHandleFunction}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              value={Name}
              onChange={(e) => { setName(e.target.value) }}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
