import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementDescription from '../AnnouncementDescription';

afterEach(cleanup)

test('should return text value from props', () => {
    const { getByText } = render(<AnnouncementDescription description='description'/>) 
    expect(getByText('description')).toHaveTextContent('description')
})