import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../searchForm';

describe('SearchForm component', () => {
    const initialQuery = 'Initial Value';
    const onSearchMock = jest.fn();
    it('renders an input with the value equal to initial value passed in props', () => {
        const { getByPlaceholderText } = render(<SearchForm initialQuery={initialQuery} onSearch={onSearchMock} />);
        const inputElement = getByPlaceholderText('What do you want to watch?');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue(initialQuery);
    });
  
    it('Calls the onChange prop with the proper value after typing and clicking the Submit button', () => {      
        const { getByPlaceholderText, getByText } = render(<SearchForm initialQuery={initialQuery} onSearch={onSearchMock} />);
        const inputElement = getByPlaceholderText('What do you want to watch?');
        const submitButton = getByText('Search');
        
        fireEvent.change(inputElement, { target: { value: 'Spider-man' } });
        fireEvent.click(submitButton);
        
        expect(onSearchMock).toHaveBeenCalledWith('Spider-man');
    });
  
    it('calls the onChange prop with the proper value after typing and pressing Enter key', () => {
        const { getByPlaceholderText } = render(<SearchForm initialQuery={initialQuery} onSearch={onSearchMock} />);
        const inputElement = getByPlaceholderText('What do you want to watch?');
        
        fireEvent.change(inputElement, { target: { value: 'Spider-man' } });
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
        
        expect(onSearchMock).toHaveBeenCalledWith('Spider-man');
    });
});