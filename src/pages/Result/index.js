import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useSearchUser from '../../hooks/useSearchUser';

import { Container, UserNotFound } from './styles';

import PageHeader from '../../components/PageHeader';
import UserInfo from '../../components/UserInfo';

import RepositoryList from '../../components/RepositoryList';

export default function Result() {
  const {
    search,
    loading,
    result,
    error,
    handleInputChange,
    handleSubmit,
    getSearch,
  } = useSearchUser();
  const { user, repos } = result;
  const { user: userParam } = useParams();

  useEffect(() => {
    getSearch(userParam);
  }, [userParam]);

  return (
    <Container>
      <PageHeader
        search={search}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <main>
        {error.isError ? (
          <UserNotFound>{error.message}</UserNotFound>
        ) : (
          <>
            <UserInfo user={user} />
            <RepositoryList repositories={repos} />
          </>
        )}
      </main>
    </Container>
  );
}
