import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../pages/Home';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    history: {
      push: jest.fn(),
    },
  }),
}));

describe('Home page', () => {
  it('should render h1 and search input', () => {
    const { container, getByTestId } = render(<Home />);

    expect(container).toContainElement(getByTestId('main-header'));
    expect(container).toContainElement(getByTestId('search-input'));
  });
});
