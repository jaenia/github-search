import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styles';

import icons from '../../assets/icons';

const altTypes = {
  company: 'Company',
  location: 'Location',
  starred: 'Number of stars',
  publicRepos: 'Number of public repos',
  followers: 'Number of followers',
};

export default function UserDetails({ details }) {
  return (
    <StyledList>
      {details.map((detail) => (
        <li data-testid="user-detail" key={detail.value}>
          <img src={icons[detail.type]} alt={altTypes[detail.type]} />
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
