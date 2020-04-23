import React from 'react';
import { render } from '@testing-library/react';

import Result from '../../pages/Result';

describe('Result page', () => {
  it('should render PageHeader, UserInfo and RepositoryList', () => {
    const { container, getByTestId } = render(<Result />);

    expect(container).toContainElement(getByTestId('main-header'));
    expect(container).toContainElement(getByTestId('search-input'));
    expect(container).toContainElement(getByTestId('user-info'));
    expect(container).toContainElement(getByTestId('repository-list'));
  });
});
