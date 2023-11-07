import Genre from './genre';
import genreSelectStyles from './genre-list.module.css';
import genreStyles from './genre.module.css';

const GenreSelect = ({ genreList, activeGenre, setActiveGenre }) => {
    const checkActive = (index, className) => activeGenre.id === index ? className : "";

    return (
        <div style={{ width: "50%", margin: 40 }}>
            <div className={genreSelectStyles.tabs}>
                {genreList && genreList.map((genre) => {
                    return <Genre key={genre.id} genre={genre} checkActive={checkActive} handleChangeGenre={setActiveGenre} />
                })}
            </div>
            <div className="panels">
                <div className={`${genreStyles.panel} ${checkActive(activeGenre.id, genreStyles.panelActive)}`}>
                    <p title={activeGenre.name}>{activeGenre.name}</p>
                </div>
            </div>
        </div>
    );
}

export default GenreSelect;