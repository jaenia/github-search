import React from 'react';
import { render } from '@testing-library/react';

import UserDetails from '../../components/UserDetails';

const data = {
  company: 'The Galactic Empire',
  location: 'Tatooine',
  starred: 10,
  publicRepos: 4,
  followers: 100,
};

const altTexts = [
  'Company',
  'Location',
  'Number of stars',
  'Number of public repos',
  'Number of followers',
];

describe('UserDetails component', () => {
  it('should render user details with every 5 items', () => {
    const { container, getByAltText } = render(<UserDetails details={data} />);

    altTexts.forEach((text) => {
      expect(container).toContainElement(getByAltText(text));
    });
  });
});
