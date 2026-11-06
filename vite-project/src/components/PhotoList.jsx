//A PhotoList component that will render all of your Photo components.
import React from "react";
import Photo from "./Gallery";

const PhotoList = () => {
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                    {/*<!-- Not Found -->*/}
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
      </div>
    )
}

export default PhotoList;