import React from 'react';
import { render } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';

const data = [
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

describe('RepositoryList component', () => {
  it('should render two repositories', () => {
    const userRepos = render(<RepositoryList repositories={data} />);
    const repoListItems = userRepos.getAllByTestId('user-repo');

    expect(repoListItems.length).toBe(data.length);
  });
});
