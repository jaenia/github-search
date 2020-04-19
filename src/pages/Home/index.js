import React from 'react';

import MainHeader from '../../components/MainHeader';
import SearchInput from '../../components/SearchInput';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <MainHeader size="60px" />
      <SearchInput value="jaenia" />
    </Container>
  );
}
