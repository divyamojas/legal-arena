// import

import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Law from "./components/Law";
import Trending from "./components/Trending";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import LoaderPage from "./components/LoaderPage";
import React, { useEffect, useState } from "react";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  // fix loader page to be active while loading

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isFetching ? <LoaderPage /> : <Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/law" element={<Law />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
