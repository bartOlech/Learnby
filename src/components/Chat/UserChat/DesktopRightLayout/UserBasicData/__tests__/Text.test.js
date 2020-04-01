import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from '../Text';

const setup = () => {
    const utils = render(<Text constantText='constantText' dataText='dataText'/>)
    const ConstantText = utils.getByText('constantText')
    const DataText = utils.getByText('dataText')

    return {
        ...utils,
        ConstantText,
        DataText
    }
}

test('ConstantText element should have value from props', () => {
    const { ConstantText } = setup();
    expect(ConstantText.innerHTML).toBe('constantText')
})

test('DataText element should have value from props', () => {
    const { DataText } = setup();
    expect(DataText.innerHTML).toBe('dataText')
})