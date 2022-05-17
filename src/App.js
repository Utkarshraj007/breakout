import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breakout from "./games/breakoutgame/index";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Breakout/>}/>
        </Routes>
    </Router>
  );
}

export default App;
