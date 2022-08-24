import { useState, useEffect } from "react";
import "./App.css";

import CVResult from "./Components/CVResult";
import GetherData from "./Components/GetherData";

function App() {
  return (
    <div className="App">

      <GetherData />


      <CVResult />
        

    </div>
  );
}

export default App;
