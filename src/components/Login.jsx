import React ,{useState}from "react";
import authservice from "../appwriteservice/service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from "../store/reducusersFile"
import { Loader } from 'lucide-react';


const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errormessage, seterrormessage] = useState("")
  const [loadingstate, setloadingstate] = useState(false)

    const dispatch = useDispatch();
  const navigate  = useNavigate();

  

  async function loginhandleFunction(e){
    e.preventDefault();
      setloadingstate(true)
    const loginstatus = await authservice.loginfunction(email , password);
    if(loginstatus.success){
    
      const usersData =  await authservice.getcurrentUser();
      if(usersData.success){
        dispatch(login(usersData.data));
        navigate("/")
      }
      
    }
    else{
      seterrormessage(loginstatus.error)
      setloadingstate(false)

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="text-center text-xl text-blue-500">{errormessage}</p>
        <form onSubmit={loginhandleFunction}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
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
            {
              loadingstate ? (<><Loader /></>): "Login"
            }
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
