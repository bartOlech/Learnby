import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnnouncementDescription from './AnnouncementDescription';

it('insert text in AnnuuncementDescription', () => {
    const { getByTestId } = render(<AnnouncementDescription description='description'/>) 
    expect(getByTestId('announcement-description')).toHaveTextContent('description')
})