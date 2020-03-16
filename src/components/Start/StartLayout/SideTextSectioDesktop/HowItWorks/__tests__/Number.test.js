import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Number from '../Template/Number';

test('Should return a number and be less than 4', () => {
    const { getByText } = render(<Number number='1'/>)
    expect(getByText('1').innerHTML).toEqual('1')
})