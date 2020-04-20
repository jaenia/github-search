import React from 'react';
import { render } from '@testing-library/react';

import MainHeader from '../../components/MainHeader';

describe('MainHeader component', () => {
  it('should render the text Github Search', () => {
    const { getByText, getByTestId } = render(<MainHeader size="60px" />);

    expect(getByTestId('main-header')).toContainElement(getByText('Github'));
    expect(getByTestId('main-header')).toContainElement(getByText('Search'));
  });
});
