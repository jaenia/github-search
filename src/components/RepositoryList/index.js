import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styles';

import RepositoryResume from '../RepositoryResume';

export default function RepositoryList({ repositories }) {
  return (
    <section data-testid="repository-list">
      <StyledList>
        {repositories.map((repo) => (
          <li key={repo.id} data-testid="user-repo">
            <RepositoryResume
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
            />
          </li>
        ))}
      </StyledList>
    </section>
  );
}

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      stargazers_count: PropTypes.number,
    })
  ).isRequired,
};
