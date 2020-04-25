import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styles';

import icons from '../../assets/icons';

import { altTypes } from '../../utils/types';

export default function UserDetails({ details }) {
  const detailsKeys = Object.keys(details);

  return (
    <StyledList>
      {detailsKeys.map((key) => (
        <li data-testid="user-detail" key={key}>
          <img src={icons[key]} alt={altTypes[key]} />
          {details[key]}
        </li>
      ))}
    </StyledList>
  );
}

UserDetails.propTypes = {
  details: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
