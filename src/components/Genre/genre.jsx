import React from "react";
import "./genre.css"

const Genre = (props) => {
    return (
        <button
            className={`tab ${props.checkActive(props.genre.id, "active")}`}
            onClick={() => props.handleChangeGenre(props.genre)}
        >
            {props.genre.name}
      </button>
    );
}

export default Genre;