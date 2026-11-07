//A PhotoList component that will render all of your Photo components.
import React from "react";
import Photos from "./Photos";

const PhotoLists = () => {
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photos />
                <Photos />
                <Photos />
                <Photos />
            </ul>
      </div>
    )
}

export default PhotoLists;