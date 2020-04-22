import React from 'react';
import { render } from '@testing-library/react';

import PageHeader from '../../components/PageHeader';

describe('PageHeader component', () => {
  it('should render h1 and search input', () => {
    const { container, getByTestId } = render(<PageHeader />);

    expect(container).toContainElement(getByTestId('main-header'));
    expect(container).toContainElement(getByTestId('search-input'));
  });
});
