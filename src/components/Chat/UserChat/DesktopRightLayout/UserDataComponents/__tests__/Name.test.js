import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Name from '../Name';

test('Name element should have value from props', () => {
    const { getByText } = render(<Name name='name'/>);
    expect(getByText('name').innerHTML).toBe('name');
})