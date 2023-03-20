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
import { useState } from "react";

function App() {
  const [isFetching, setIsFetching] = useState(true);
  // fix loader page to be active while loading
  setTimeout(() => {
    setIsFetching(false);
  }, 3000);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isFetching ? <LoaderPage /> : <Home />} />
          <Route
            path="/trending"
            element={isFetching ? <LoaderPage /> : <Trending />}
          />
          <Route path="/law" element={isFetching ? <LoaderPage /> : <Law />} />
          <Route
            path="/dashboard"
            element={isFetching ? <LoaderPage /> : <Dashboard />}
          />
          <Route
            path="/user"
            element={isFetching ? <LoaderPage /> : <User />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
