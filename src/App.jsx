// packages
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

//stylesheet
import "./App.scss";

// loading page
import LoaderPage from "./components/LoaderPage";

// lazy loaded components
const Home = lazy(() => import('./components/Home'));
const Layout = lazy(() => import("./components/Layout"));
const Law = lazy(() => import("./components/Law"));
const Trending = lazy(() => import("./components/Trending"));
const User = lazy(() => import("./components/User"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  const [isFetching, setIsFetching] = useState(true);
  // fix loader page to be active while loading
  useEffect(() => {

    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  })
  return (
    <>
      {isFetching ? <LoaderPage load = {true}/> : (
        <Suspense fallback={<LoaderPage load = {false} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/trending"
                element={<Trending />}
              />
              <Route path="/law" element={<Law />} />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
              <Route
                path="/user"
                element={<User />}
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>

  );
}

export default App;
