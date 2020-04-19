import React from 'react';
import PropTypes from 'prop-types';

import { Form, SubmitButton } from './styles';

import SearchIcon from '../../assets/icons/search.svg';
import Spinner from '../../assets/icons/spinner.svg';

export default function SearchInput({ value, loading }) {
  return (
    <Form>
      <input type="text" value={value} />
      <SubmitButton type="submit" loading={loading}>
        {loading ? (
          <img src={Spinner} alt="Loading your search" />
        ) : (
          <img src={SearchIcon} alt="Search icon" />
        )}
      </SubmitButton>
    </Form>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

SearchInput.defaultProps = {
  loading: false,
};
