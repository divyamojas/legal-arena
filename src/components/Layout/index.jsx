import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
