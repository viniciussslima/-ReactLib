import React, { FC } from "react";
import "./style.css";

interface LoadingProps {
  isLoading?: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loading-content">
            <div className="loading-1"></div>
            <div className="loading-2"></div>
            <div className="loading-3"></div>
            <span className="text">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
