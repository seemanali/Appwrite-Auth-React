import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loginstatus = useSelector((state)=>{return (state.user.loginStatus)})
  // console.log(loginstatus);
  const routes = [
    {
      name: "DashBoard",
      url: "/"
    }, {
      name: !loginstatus && "SignUp",
      url:  !loginstatus && "/signup"
    }, {
      name: loginstatus ? "LogOut" : "Login",
      url: loginstatus ? "/logout" : "/login"
    },
    
  ];

  const Navigate = useNavigate();
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Appwrite Auth
        </div>
        <div className="flex space-x-4">
          {
            routes.map((root, index) => {
              
              return (
                <button 
                onClick={()=>{Navigate(root.url)}}
                key={index}
                  className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                  {root.name}
                  
                </button>
              )
            })
          }


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
