import React, { FC } from "react";
import "./style.css";

const Loading: FC<LoadingProps> = ({ isLoading, color }) => {
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loading-content">
            <div
              className="loading-circle"
              style={{ top: 118, left: 93, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 152, left: 93, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 175, left: 118, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 175, left: 152, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 152, left: 178, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 118, left: 176, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 95, left: 152, borderColor: color }}
            ></div>
            <div
              className="loading-circle"
              style={{ top: 95, left: 118, borderColor: color }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
