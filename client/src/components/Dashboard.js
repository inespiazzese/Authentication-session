import React from "react";
import AuthApi from "./fake-auth/AuthApi";
import { logout } from "./auth-api";
export default function Dashboard() {
  const authApi = React.useContext(AuthApi);
  const handleLogout = async () => {
    const result = await logout();
    authApi.setAuth(result.data.auth);
  };
  return (
    <div className="ml-3">
      <h1 className="text-3xl font-bold mt-3 ml-3">DASHBOARD</h1>
      <button
        onClick={handleLogout}
        className=" pointer-cursor ml-3 bg-indigo-500 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
