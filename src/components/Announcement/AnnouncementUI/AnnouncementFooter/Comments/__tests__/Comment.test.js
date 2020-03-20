import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Comment from '../Comment';

afterEach(cleanup)

const setup = () => {
    const utils = render(<Router><Comment 
            likeArray='1'
            userImage='example'
            TextOfName='name'
            textOfComment='comment'
         /></Router>)
    const likeAmount = utils.getByTestId('likeAmount');
    const textOfName = utils.getByText('name')
    const textOfComment= utils.getByText('comment')

    return {
        likeAmount,
        textOfName,
        textOfComment,
        ...utils,
    }
  }

  test('It should have value equal 1', () => {
    const { likeAmount } = setup();

    expect(likeAmount.innerHTML).toBe('1');
  })

  test('It should return a text value', () => {
    const { textOfName, textOfComment } = setup();
    
    expect(textOfName.innerHTML).toBe('name');
    expect(textOfComment.innerHTML).toBe('comment');
  })