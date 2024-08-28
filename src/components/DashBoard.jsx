import React from "react";
import { useSelector } from "react-redux";
import { LayoutDashboard } from 'lucide-react';



const Dashboard = () => {
  const userData = useSelector((state) => state.user);
  // console.log(userData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center"><LayoutDashboard />User Dashboard</h2>
        {!userData.loginStatus ? (
          <p className="text-xl font-bold text-center text-blue-500">
            You are Not Currently Logged In
          </p>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <p className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50">
                {userData.name}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <p className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50">
                {userData.email}
              </p>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
