import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserData from '../UserData';
import { CurrentUserProvider } from '../../../../context/CurrentUser.context'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Media from 'react-media';

test('should have text content with the props value', () => {
    const { getByText, getByTestId } = render(<Router><CurrentUserProvider><Media query="(max-width: 1000px)" render={() =>(
        <UserData age='11' name='bartek'/>
    )}/></CurrentUserProvider></Router>);
    expect(getByTestId('name').innerHTML).toBe('Liczba kometarzy: 5')
})

// OSTATNI TEST W ANNOUNCEMENT(NIE DZIALA BO JEST MEDIA)