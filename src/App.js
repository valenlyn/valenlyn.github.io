import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Message from "./message/message";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Message} />
    </Router>
  );
}

export default App;
