import React, { useState, useCallback } from 'react';

import useSearchUser from '../../hooks/useSearchUser';

import MainHeader from '../../components/MainHeader';
import SearchInput from '../../components/SearchInput';

import { Container } from './styles';

export default function Home() {
  const { search, handleInputChange, handleSubmit } = useSearchUser();

  return (
    <Container>
      <MainHeader size="60px" />
      <SearchInput
        value={search}
        labelText="User"
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
