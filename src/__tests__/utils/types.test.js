import { altTypes, errorMessages } from '../../utils/types';

describe('utils/types', () => {
  it('should altTypes have gived fields', () => {
    const expected = {
      company: 'Company',
      location: 'Location',
      starred: 'Number of stars',
      publicRepos: 'Number of public repos',
      followers: 'Number of followers',
    };

    expect(JSON.stringify(altTypes)).toBe(JSON.stringify(expected));
  });

  it('should errorMessages has gived values', () => {
    const expected = {
      notFound: 'User not found :(',
      generic: 'An error occurred',
      offline: 'You are offline',
    };

    expect(JSON.stringify(errorMessages)).toBe(JSON.stringify(expected));
  });
});
