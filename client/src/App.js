import React from "react";
import { useState, useEffect } from "react";
import Routes from "./components/routes/Routes";
import AuthApi from "./components/fake-auth/AuthApi";
import { BrowserRouter as Router } from "react-router-dom";
import { verify } from "./components/auth-api";
function App() {
  const [auth, setAuth] = useState(false);
  const verifySession = async () => {
    const result = await verify();
    console.log("hey there", result.data);
    if (result.data.auth) {
      setAuth(true);
    }
  };
  useEffect(() => {
    verifySession();
  }, []);
  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </>
  );
}

export default App;
