import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Template from '../Template';

test('Should return only the image provide to css', () => {
    const { getByTestId } = render(<Template image='example image'/>)
    expect(getByTestId('template').innerHTML).toEqual('')
})