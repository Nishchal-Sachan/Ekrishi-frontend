import "./layout.scss";
import Navbar from "../../components/navbar/Navbar"
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const { currUser, updateUser } = useContext(AuthContext);
  return (
    !currUser ? (<Navigate to={"/login"}></Navigate>) : (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  );
}

