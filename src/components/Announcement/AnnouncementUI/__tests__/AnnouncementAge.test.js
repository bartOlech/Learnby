import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementAge from '../AnnouncementAge';

test('should return text value from props', () => {
    const { getByText } = render(<AnnouncementAge age='age'/>) 
    expect(getByText('age')).toHaveTextContent('age')
})