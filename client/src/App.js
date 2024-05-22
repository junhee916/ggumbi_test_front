import React from "react";
import { Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Main from "./Main";
import Admin from "./Admin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </CookiesProvider>
    </div>
  );
}

export default App;
