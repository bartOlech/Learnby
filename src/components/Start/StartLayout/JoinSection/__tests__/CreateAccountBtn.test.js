import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateAccoundBtn from '../CreateAccountBtn';
import { BrowserRouter as Router, Link } from 'react-router-dom';

test('render', () => {
    const { asFragment } = render(<Router><CreateAccoundBtn/></Router>)
    expect(asFragment()).toMatchSnapshot();
})

test('It should return a specific value', () => {
    const { getByText } = render(<Router><CreateAccoundBtn/></Router>) 
    expect(getByText('Załóż konto')).toHaveTextContent('Załóż konto')
})
