import React from 'react';

import { Container, UserNotFound } from './styles';

import PageHeader from '../../components/PageHeader';
import UserInfo from '../../components/UserInfo';

import RepositoryList from '../../components/RepositoryList';

const user = {
  name: 'Jaênia Sousa',
  avatar_url: 'https://avatars2.githubusercontent.com/u/17907292?v=4',
  login: 'jaenia',
};

// const user = {null};

const repositories = [
  {
    name: 'github-search',
    description:
      'A simple app where you can search for GitHub users and view their repositories.',
    stargazers_count: 5,
  },
  {
    name: 'Death Star',
    description: 'The most powerful weapon in the Universe',
    stargazers_count: 10,
  },
];

export default function Result() {
  return (
    <Container>
      <PageHeader />
      <main>
        {user !== null ? (
          <>
            <UserInfo user={user} />
            <RepositoryList repositories={repositories} />
          </>
        ) : (
          <UserNotFound>User not found :(</UserNotFound>
        )}
      </main>
    </Container>
  );
}
