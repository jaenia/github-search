import React from 'react';
import { render } from '@testing-library/react';

import UserDetails from '../../components/UserDetails';

const data = [
  { type: 'organization', value: 'The Galactic Empire' },
  { type: 'location', value: 'Tatooine' },
  { type: 'star', value: '1.000.000' },
  { type: 'repositories', value: '4' },
  { type: 'followers', value: '9.999.999' },
];

describe('UserDetails component', () => {
  it('should render with success', () => {
    const userDetails = render(<UserDetails details={data} />);
    const details = userDetails.getAllByTestId('user-detail');

    expect(details.length).toBe(data.length);
  });
});
