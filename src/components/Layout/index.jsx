import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./index.scss";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      {/* sidebar navbar */}
      <Outlet />
    </div>
  );
};

export default Layout;
