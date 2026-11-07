import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//Import Components
import Nav from "./components/Nav";
import Search from "./components/Search";
import PhotoLists from "./components/PhotoLists";

const App = () => {
  return(
    <div className="container">
      <Search/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/cats" element={<PhotoLists />}/>
        <Route path="/dogs" element={<PhotoLists/>}/>
        <Route path="/computers" element={<PhotoLists />}/>
        <Route path="/search/:query" element={<PhotoLists />}/>
      </Routes>
    </div>
  )

}

export default App;