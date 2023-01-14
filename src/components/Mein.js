import React, { useState } from "react";
import Project from "./Project";

const Mein = ({ projects}) => {

    return (
        <div className="mein">
            {projects.map((item) => {
                return (
                    <Project key={item?.id} item={item} />
                )
            })}
        </div>
    )
}

export default Mein;