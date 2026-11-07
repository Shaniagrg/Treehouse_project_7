import React, {useState, useEffect, useCallback} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//Import Components
import Nav from "./components/Nav";
import Search from "./components/Search";
import PhotoLists from "./components/PhotoLists";

//Import Pixabay API key
import apiKey from "./config";

const App = () => {

  //store the final input value from the search component in the word variable 
  const [word, setWord] = useState('');

  //store the api data into the photoData
  const [photoData, setPhotoData] = useState(null);

  //using useEffect to call the api
  //using word variable which is a state as a dependency to render the UI
  useEffect(() => {
    const fetchData = async (query)  => {
      try{
        const req = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
        const res = await req.json();
        setPhotoData(res.hits);
      }catch(err){
        console.log(err);
      }
    }

    //call api only if we have search word, if search word is empty, avoid api call
    if(word)
      fetchData(word);
    
  }, [word]);

  return(
    <div className="container">
      <Search setWord={setWord}/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/cats" element={<PhotoLists />}/>
        <Route path="/dogs" element={<PhotoLists/>}/>
        <Route path="/computers" element={<PhotoLists />}/>
        <Route path="/search/:query" element={<PhotoLists photoData={photoData} />}/>
      </Routes>
    </div>
  )

}

export default App;