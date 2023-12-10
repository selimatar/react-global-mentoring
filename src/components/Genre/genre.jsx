import React from "react";
import styles from "./genre.module.css"

const Genre = (props) => {
    return (
        <button
            className={`${styles.tab} ${props.checkActive(props.genre.id, styles.tabActive)}`}
            onClick={() => props.handleChangeGenre(props.genre)}
        >
            {props.genre.name}
      </button>
    );
}

export default Genre;