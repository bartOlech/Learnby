import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Arrow from '../Template/Arrow';

test('Should provide only image to css', () => {
    const { getByTestId } = render(<Arrow/>)
    expect(getByTestId('arrow-image').innerHTML).toEqual('')
})