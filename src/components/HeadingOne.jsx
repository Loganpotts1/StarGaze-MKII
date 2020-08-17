import React from "react";

export default function HeadingOne(props) {
    
    return (
        <h1 className="heading-1">
            {props.text}
        </h1>
    );
}