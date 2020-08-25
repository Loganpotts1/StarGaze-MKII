import React from "react";

export default function ButtonDuoFirst(props) {

    return (
        <span className="btn-wrap">
            <button className="btn-duo btn-duo--1">
                <span className="btn-duo__text">
                    {props.text}
                </span> 
            </button>
        </span>
    );
}

function ButtonDuoLast(props) {

    return (
        <span className="btn-wrap">
            <button className="btn-duo btn-duo--2">
                <span className="btn-duo__text">
                    {props.text}
                </span> 
            </button>
        </span>
    );
}

export {
    ButtonDuoFirst,
    ButtonDuoLast
};