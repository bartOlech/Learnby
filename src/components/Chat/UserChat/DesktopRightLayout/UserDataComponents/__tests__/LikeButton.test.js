import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeButton from '../Buttons&ImageBox/LikeButton';;

afterEach(cleanup)

test('Component should change background style after pressing the button', () => {
    const { getByTestId } = render(<LikeButton isLike={false}/>);
    expect(getByTestId('like-button')).toHaveStyle('background-image: url(heart-grey.svg)')    
    fireEvent.click(getByTestId('like-button'));
    expect(getByTestId('like-button')).toHaveStyle('background-image: url(heart-green.svg)')    
})