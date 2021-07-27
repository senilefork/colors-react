import React from "react";
import { Link } from "react-router-dom";

//destructure colors inherited from Routes
const ColorList = ({colors}) => {
    const colorLinks = Object.keys(colors).map((color) => {
        return <Link to={`/colors/${color}`}>{color}</Link>
    })
    return(
        <div>
          {colorLinks}
        </div>
    )
}

export default ColorList;