import React from 'react';
import PropTypes from 'prop-types';

import MainHeader from '../MainHeader';
import SearchInput from '../SearchInput';

import { StyledHeader } from './styles';

export default function PageHeader({ search, onChange, onSubmit, loading }) {
  return (
    <StyledHeader data-testid="page-header">
      <MainHeader size="40px" />
      <SearchInput
        value={search}
        labelText="User"
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
      />
    </StyledHeader>
  );
}

PageHeader.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
