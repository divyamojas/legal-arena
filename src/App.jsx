// import

import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Law from "./components/Law";
import Trending from "./components/Trending";
import User from "./components/User";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
