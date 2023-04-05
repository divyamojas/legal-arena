import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";

const LoaderPage = ({ load }) => {
  const legalArena = "LEGAL ARENA".split("");

  return (
    <div className="container">
      <div className={`la-text ${load && 'la-text-animate'}`}>
        {legalArena.map((char, i) => (
          <span key={char + i} className={load && `text-animate _${i}`}>
            {char}
          </span>
        ))}
        <br />
      </div>
      <div className={load && "loader-container"}>
        <Loader type="line-scale-pulse-out-rapid" />{" "}
      </div>
    </div>
  );
};

export default LoaderPage;
