import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home.jsx";
import Users from "./components/pages/Users/Users.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/user/:login" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
