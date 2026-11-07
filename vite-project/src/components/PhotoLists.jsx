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
                    {/*<!-- Not Found -->*/}
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
      </div>
    )
}

export default PhotoLists;