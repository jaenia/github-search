import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styles';

import icons from '../../assets/icons';

export default function UserDetails({ details }) {
  return (
    <StyledList>
      {details.map((detail) => (
        <li data-testid="user-detail" key={detail.value}>
          <img src={icons[detail.type]} alt={detail.type} />
          {detail.value}
        </li>
      ))}
    </StyledList>
  );
}

UserDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};
