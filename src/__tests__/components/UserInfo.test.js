import React from 'react';
import { render } from '@testing-library/react';

import UserInfo from '../../components/UserInfo';

const data = {
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

describe('UserInfo component', () => {
  it('should render user avatar and details', () => {
    const userInfos = render(<UserInfo user={data} />);
    const details = userInfos.getAllByTestId('user-detail');
    const { container, getByText } = userInfos;

    expect(container).toContainElement(getByText(data.name));
    expect(details.length).toBe(Object.keys(data.details).length);
  });
});
