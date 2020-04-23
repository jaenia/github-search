import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar, Name, Login } from './styles';

import UserDetails from '../UserDetails';

export default function UserInfo({ user }) {
  return (
    <Container>
      <section data-testid="user-info">
        <Avatar>
          <img src={user.avatar_url} alt="User avatar" />
        </Avatar>
        <h2>
          <Name>{user.name}</Name>
          <Login>{user.login}</Login>
        </h2>
      </section>
      <UserDetails details={user.details} />
    </Container>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    details: PropTypes.shape({
      company: PropTypes.string,
      location: PropTypes.string,
      starred: PropTypes.number,
      publicRepos: PropTypes.number,
      followers: PropTypes.number,
    }),
  }).isRequired,
};
