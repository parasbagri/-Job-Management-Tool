import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Components/Home";

function App() {
  return (
    <RecoilRoot>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    </RecoilRoot>
  );
}

export default App;
