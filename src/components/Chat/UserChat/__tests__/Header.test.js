import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

const setup = () => {
    const utils = render(<Header name='name' image='image'/>)
    const Image = utils.getByTestId('image')
    const Name = utils.getByText('name')

    return {
        ...utils,
        Image,
        Name
    }
}

test('should have a correct background-image style', () => {
    const { Image } = setup();
    expect(Image).toHaveStyle('background-image: url(image)');
})

test('should have value from props', () => {
    const { Name } = setup();
    expect(Name.innerHTML).toBe('name')
})