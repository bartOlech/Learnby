import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CurrentUserProvider } from '../../../../../context/CurrentUser.context';
import CreateCommmentBox from './CreateCommentBox';

const setup = () => {
    const utils = render(<CurrentUserProvider><CreateCommmentBox  /></CurrentUserProvider>)
    const input = utils.getAllByTestId('comment-input')
    return {
      input,
      ...utils,
    }
  }

test('It should allow letters to be inputted', () => {
    const { input } = setup()
    expect(input.value).toBe(undefined) // empty before
    fireEvent.change(input, { target: { value: 'Good Day' } })
    expect(input.value).toBe('Good Day') 
  })