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
    handleInputChange,
    handleSubmit,
    getSearch,
  } = useSearchUser();
  const { user, repos } = result;
  const { user: userParam } = useParams();

  useEffect(() => {
    getSearch(userParam);
  }, []);

  return (
    <Container>
      <PageHeader />
      <main>
        {user !== null ? (
          <>
            <UserInfo user={user} />
            <RepositoryList repositories={repos} />
          </>
        ) : (
          <UserNotFound>User not found :(</UserNotFound>
        )}
      </main>
    </Container>
  );
}
