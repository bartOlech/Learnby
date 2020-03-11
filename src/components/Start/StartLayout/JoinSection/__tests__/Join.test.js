import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Join from '../Join';
import { BrowserRouter as Router, Link } from 'react-router-dom';

test('render', () => {
    const { asFragment } = render(<Router><Join/></Router>);
    expect(asFragment()).toMatchSnapshot();
})

