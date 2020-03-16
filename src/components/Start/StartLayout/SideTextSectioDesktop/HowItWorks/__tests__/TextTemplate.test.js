import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextTemplate from '../Template/TextTemplate';

test('should return text value from props', () => {
    const { getByText } = render(<TextTemplate Text='example text'/>);
    expect(getByText('example text')).toHaveTextContent('example text');
})