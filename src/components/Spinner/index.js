import React from 'react';

import { spinner } from '../../assets/img';
import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <img src={spinner} alt="Loading" />
    </Container>
  );
}
