import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from "../GenreSelect";

describe('GenreSelect component', () => {
  const genreList = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' }
  ];
  const currentSelected = 'Comedy';
  const selectGenre = jest.fn();

  test("renders all genres passed in props", () => {
    const { getAllByText } = render(
      <GenreSelect genreList={genreList} currentSelected="Comedy" />
    );
  
    // Check if all genre names are rendered
    genreList.forEach((genre) => {
      const genreElements = getAllByText(genre.name);
      expect(genreElements.length).toBeGreaterThan(0);
    });
  });

  test('highlights a selected genre passed in props', () => {
    const currentSelected = 'Action';
    const { getByTitle } = render(
      <GenreSelect 
        genreList={genreList} 
        currentSelected={currentSelected} 
        selectGenre={selectGenre} 
      />
    );

    const initialSelectedGenre = getByTitle(currentSelected);
    expect(initialSelectedGenre).toBeInTheDocument();
  });

  it("calls 'onChange' callback with correct genre after click event", () => {
    const { getByText } = render(
      <GenreSelect
        genreList={genreList}
        currentSelected={currentSelected}
        selectGenre={selectGenre}
      />
    );

    const genreButton = getByText("Action");

    fireEvent.click(genreButton);

    expect(selectGenre).toHaveBeenCalledTimes(1);
    expect(selectGenre).toHaveBeenCalledWith(1);
  });
});