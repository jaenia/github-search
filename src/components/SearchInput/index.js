import React from 'react';
import PropTypes from 'prop-types';

import { Form, SubmitButton, AnimatedSpinner } from './styles';

import searchIcon from '../../assets/icons/search.svg';
import spinner from '../../assets/icons/spinner.svg';

export default function SearchInput({ value, loading, labelText }) {
  return (
    <Form data-testid="search-input">
      <input
        aria-label={labelText}
        aria-required="true"
        type="text"
        value={value}
      />
      <SubmitButton type="submit" disabled={loading}>
        {loading ? (
          <AnimatedSpinner src={spinner} alt="Loading your search" />
        ) : (
          <img src={searchIcon} alt="Search" />
        )}
      </SubmitButton>
    </Form>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

SearchInput.defaultProps = {
  loading: false,
};
