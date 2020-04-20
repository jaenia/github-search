import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

export default function MainHeader({ size }) {
  return (
    <Title size={size} data-testid="main-header">
      <span>Github</span> Search
    </Title>
  );
}

MainHeader.propTypes = {
  size: PropTypes.string.isRequired,
};
