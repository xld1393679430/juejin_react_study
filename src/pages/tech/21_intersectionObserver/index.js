import React, { useState, useEffect, useRef } from "react";

const Index = () => {
  return (
    <div className="main">
      <div>
        {Array.from({ length: 30 }, (_, index) => {
          return <div className="period" key={index}>{index + 1}</div>;
        })}
      </div>
    </div>
  );
};

export default Index;
