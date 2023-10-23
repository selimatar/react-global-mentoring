import Genre from './genre';
import './genre-list.css';

const GenreSelect = ({ genreList, activeGenre, setActiveGenre }) => {
    const checkActive = (index, className) => activeGenre.id === index ? className : "";

    return (
        <div style={{width: "50%", margin: 40}}>
            <div className="tabs">
                {genreList && genreList.map((genre) => {
                    return <Genre key={genre.id} genre={genre} checkActive={checkActive} handleClick={() => setActiveGenre(activeGenre.name)}/>
                })}
            </div>
            <div className="panels">
                <div className={`panel ${checkActive(activeGenre.id, "active")}`}>
                    <p title={activeGenre.name}>{activeGenre.name}</p>
                </div>
            </div>
        </div>
    );
}

export default GenreSelect;
