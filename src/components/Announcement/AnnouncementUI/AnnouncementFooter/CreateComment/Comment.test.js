import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateCommmentBox from './CreateCommentBox';

const setup = () => {
    const utils = render(<CreateCommmentBox  />)
    const input = utils.getAllByTestId('comment-input')
    return {
      input,
      ...utils,
    }
  }

test('It should allow letters to be inputted', () => {
    const { input } = setup()
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, { target: { value: 'Good Day' } })
    expect(input.value).toBe('Good Day') 
  })