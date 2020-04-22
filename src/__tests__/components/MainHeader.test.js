import React from 'react';
import { render } from '@testing-library/react';

import MainHeader from '../../components/MainHeader';

describe('MainHeader component', () => {
  it('should render the text Github Search', () => {
    const { container, getByText } = render(<MainHeader size="60px" />);

    expect(container).toContainElement(getByText('Github'));
    expect(container).toContainElement(getByText('Search'));
  });
});
