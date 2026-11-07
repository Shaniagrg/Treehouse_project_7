import React from "react";
import Photo from "./Photos.jsx";

//loop over the image data from from the api call
//photo component is passed img url and description

const PhotoLists = ({title, photoData}) => {
    return(
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {
                    photoData && photoData.map((val, idx)=> {
                        return (
                            <Photo key={idx} imgUrl={val.previewURL} imgDescription={val.description}/>
                        )
                    })
                }
            </ul>
      </div>
    )
}

export default PhotoLists;