import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CurrentUserProvider } from '../../../../../../context/CurrentUser.context';
import CreateCommmentBox from '../CreateCommentBox';
import CommentSendButton from '../CommentSendButton';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, useParams } from 'react-router-dom';

afterEach(cleanup)

const setup = () => {
  const utils = render(<Router><CurrentUserProvider><CreateCommmentBox/></CurrentUserProvider></Router>) 
  const input = utils.getByTestId('input-field')
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

