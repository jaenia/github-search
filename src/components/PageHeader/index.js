import React from 'react';

import MainHeader from '../MainHeader';
import SearchInput from '../SearchInput';

import { StyledHeader } from './styles';

export default function PageHeader() {
  return (
    <StyledHeader data-testid="page-header">
      <MainHeader size="40px" />
      <SearchInput value="" labelText="User" />
    </StyledHeader>
  );
}
