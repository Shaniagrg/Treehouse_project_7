//A Photo component that will display an li and img element.
import React from "react";

//receive the image url and description which will be used as image source and alt respectively
const Photo = ({imgUrl, imgDescription}) => {
    return(
        <li>
            <img src={imgUrl} alt={imgDescription}/>
        </li>
    )
}

export default Photo;
