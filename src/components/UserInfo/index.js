import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar, Name, Login } from './styles';

import UserDetails from '../UserDetails';

const userDetails = [
  { type: 'company', value: 'The Galactic Empire' },
  { type: 'location', value: 'Tatooine' },
  { type: 'starred', value: '1.000.000' },
  { type: 'publicRepos', value: '4' },
  { type: 'followers', value: '9.999.999' },
];

export default function UserInfo({ user }) {
  return (
    <Container>
      <section>
        <Avatar>
          <img src={user.avatar_url} alt="User avatar" />
        </Avatar>
        <h2>
          <Name>{user.name}</Name>
          <Login>{user.login}</Login>
        </h2>
      </section>
      <UserDetails details={userDetails} />
    </Container>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};
