import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExtraTextTemplate from '../Template/ExtraTextTemplate';

test('Should return text from props', () => {
    const { getByText } = render(<ExtraTextTemplate ExtraText='example extra text'/>)
    expect(getByText('example extra text')).toHaveTextContent('example extra text')
})