import React from 'react';
import PropTypes from 'prop-types';

import { Name, Description, Stars } from './styles';

import icons from '../../assets/icons';

export default function RepositoryResume({ name, description, stars }) {
  return (
    <>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Stars>
        <img src={icons.starred} alt="Repository stars" />
        {stars}
      </Stars>
    </>
  );
}

RepositoryResume.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};
