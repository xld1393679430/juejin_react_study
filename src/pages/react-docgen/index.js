import React, { useState, useEffect } from "react";
import Person from "./comonents/Person";

const Index = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>React-Docgen</p>
      <Person />
    </div>
  );
};

export default Index;
