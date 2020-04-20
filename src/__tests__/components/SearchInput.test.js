import React from 'react';
import { render } from '@testing-library/react';

import SearchInput from '../../components/SearchInput';

describe('SearchInput component', () => {
  it('should render the input', () => {
    const { getByTestId, getByAltText } = render(
      <SearchInput value="" labelText="User" />
    );

    expect(getByTestId('search-input')).toContainElement(
      getByAltText('Search')
    );
  });

  it('should render the loading input', () => {
    const { getByTestId, getByAltText } = render(
      <SearchInput value="" labelText="User" loading />
    );

    expect(getByTestId('search-input')).toContainElement(
      getByAltText('Loading your search')
    );
  });
});
