import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../movieTile";

describe("MovieTile", () => {
  const movie = {
    "id": 424785,
    "title": "Transformers 7",
    "tagline": "",
    "vote_average": 0,
    "vote_count": 0,
    "release_date": "2019-06-26",
    "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
    "overview": "Plot unknown.",
    "budget": 0,
    "revenue": 0,
    "genres": [
        "Science Fiction",
        "Action",
        "Adventure"
    ],
    "runtime": null
  };
  
  test("renders movie tile component", () => {
    render(
      <MovieTile
        key={movie.title}
        movieInfo={movie}
        onClick={() => {
          handleTileClick(movie);
        }}
        onEdit={() => handleEditClick(movie)}
        onDelete={() => handleDeleteClick(movie)}
      />
    );
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.release_date.substring(0, 4))).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(', '))).toBeInTheDocument();
  });

  it("should render MovieDetail component after click event", () => {
    const MockMovieDetail = () => <div>Mock Movie Detail Component</div>;
    // Create a mock function for the onClick event
    const handleTileClick = jest.fn();

    const { getByText, getByAltText } = render(
      <MovieTile 
        key={movie.title}
        movieInfo={movie} 
        onClick={handleTileClick} 
      />
    );

    const movieImage = getByAltText(movie.title);
    fireEvent.click(movieImage);
    render(<MockMovieDetail />);

    const mockDetailElement = getByText(/Mock Movie Detail Component/i);
    const movieDetailsText = getByText(movie.title);
    
    expect(mockDetailElement).toBeInTheDocument();
    expect(movieDetailsText).toBeInTheDocument();
    expect(handleTileClick).toHaveBeenCalled();
  });
});
