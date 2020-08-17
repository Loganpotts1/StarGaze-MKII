import React from "react";

export default function ButtonDuoFirst(props) {

    return (
        <button className="btn-duo btn-duo--1">
            {props.text}
        </button>
    );
}

function ButtonDuoLast(props) {

    return (
        <button className="btn-duo btn-duo--2">
            {props.text}
        </button>
    );
}

export {
    ButtonDuoFirst,
    ButtonDuoLast
};