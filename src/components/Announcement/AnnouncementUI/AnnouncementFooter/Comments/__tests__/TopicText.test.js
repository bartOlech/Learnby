import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopicText from '../TopicText';

afterEach(cleanup)

test('should have text content with the props value', () => {
    const { getByText } = render(<TopicText amountOfComments='5'/>);
    expect(getByText('Liczba kometarzy: 5').innerHTML).toBe('Liczba kometarzy: 5')
})