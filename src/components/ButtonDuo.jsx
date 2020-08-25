import React from "react";

export default function ButtonDuoFirst(props) {

    return (
        <span className="btn-wrap">
            <button className="btn-duo btn-duo--1">
                {props.text}
            </button>
        </span>
    );
}

function ButtonDuoLast(props) {

    return (
        <span className="btn-wrap">
            <button className="btn-duo btn-duo--2">
                {props.text}
            </button>
        </span>
    );
}

export {
    ButtonDuoFirst,
    ButtonDuoLast
};