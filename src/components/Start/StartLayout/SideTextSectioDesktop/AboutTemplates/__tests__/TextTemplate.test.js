import React from 'react';
import { render } from '@testing-library/react';
import TextTemplate from '../TextTemplate';
import '@testing-library/jest-dom/extend-expect';

test('Should have a properly text value', () => {
    const { getByTestId } = render(<TextTemplate MainText='example text' ExtraText='extra example text'/>);
    expect(getByTestId('main-text')).toHaveTextContent('example text');
    expect(getByTestId('extra-text')).toHaveTextContent('extra example text');
    
    expect(getByTestId('main-text').innerHTML).not.toBeNull()
    expect(getByTestId('extra-text').innerHTML).not.toBeNull()
})