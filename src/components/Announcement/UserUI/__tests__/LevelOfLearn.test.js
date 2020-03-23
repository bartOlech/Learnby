import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import LevelOfLearn from '../LevelOfLearn';

afterEach(cleanup)

test('should return objects of div element', () => {
    const { getByTestId } = render(<LevelOfLearn level='1'/>)
    expect(typeof getByTestId('levelDotted')).toBe('object')
})
