import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import useSearchUser from '../../hooks/useSearchUser';

import { Container, UserNotFound } from './styles';

import PageHeader from '../../components/PageHeader';
import UserInfo from '../../components/UserInfo';
import Spinner from '../../components/Spinner';

import RepositoryList from '../../components/RepositoryList';

const ResultContent = ({ error, user, repos, loading }) => {
  return error.isError ? (
    <UserNotFound>{error.message}</UserNotFound>
  ) : (
    <>
      <UserInfo user={user} loading={loading} />
      <RepositoryList repositories={repos} />
    </>
  );
};

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
        {loading ? (
          <Spinner />
        ) : (
          <ResultContent
            error={error}
            user={user}
            repos={repos}
            loading={loading}
          />
        )}
      </main>
    </Container>
  );
}

ResultContent.propTypes = {
  error: PropTypes.shape({ isError: PropTypes.bool, message: PropTypes.string })
    .isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    details: PropTypes.object,
  }).isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
