import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "../sortControl";

describe("SortControl", () => {
  test("changes value when a different option is clicked", () => {
    // Initialize a mock function to track the selection change
    const mockOnSelectionChange = jest.fn();

    render(
      <SortControl currentSelection="release-date" onSelectionChange={mockOnSelectionChange} />
    );

    const sortSelectInput = screen.getByRole("combobox");
    fireEvent.change(sortSelectInput, { target: { value: "title" } });
    expect(mockOnSelectionChange).toHaveBeenCalledWith("title");
  });
});