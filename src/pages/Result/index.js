import React from 'react';

import { Container, UserNotFound } from './styles';

import PageHeader from '../../components/PageHeader';
import UserInfo from '../../components/UserInfo';

import RepositoryList from '../../components/RepositoryList';

const user = {
  name: 'Jaênia Sousa',
  login: 'jaenia',
  avatar_url: 'https://avatars2.githubusercontent.com/u/17907292?v=4',
  details: {
    company: 'The Galactic Empire',
    location: 'Tatooine',
    starred: 10,
    publicRepos: 4,
    followers: 100,
  },
};

// const user = null;

const repositories = [
  {
    id: 1,
    name: 'github-search',
    description:
      'A simple app where you can search for GitHub users and view their repositories.',
    stargazers_count: 5,
  },
  {
    id: 2,
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
