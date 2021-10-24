import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, logout } from "./firebase";
// import { fetchUserName } from "react-hooks/exhaustive-deps";
import "./styles/Dashboard.css";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    
  });
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        
        <div>Mobile Number</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
