import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementTopic from '../AnnouncementTopic';

afterEach(cleanup)

test('should return text value from props', () => {
    const { getByText } = render(<AnnouncementTopic topic='topic'/>) 
    expect(getByText('topic')).toHaveTextContent('topic')
})