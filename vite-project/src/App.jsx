import React from "react";
import { Route, Routes } from "react-router-dom";

//Import Components
import Nav from "./components/Nav";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
//import PhotoList from "./components/PhotoList";

const App = () => {
  return(
    <div className="container">
      <Search/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Gallery/>}/>
        <Route path="/cats" element={<Gallery/>}/>
        <Route path="/dogs" element={<Gallery />}/>
        <Route path="/computers" element={<Gallery />}/>
        <Route path="/search/:query" element={}/>
      </Routes>
    </div>
  )

}

export default App;