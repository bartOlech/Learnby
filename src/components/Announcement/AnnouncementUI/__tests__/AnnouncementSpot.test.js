import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementSpot from '../AnnouncementSpot';

afterEach(cleanup)

test('should return text value from props', () => {
    const { getByTestId } = render(<AnnouncementSpot remote='false' spot='spot'/>) 
    expect(getByTestId('spot')).toHaveTextContent('Zdalnie')
})