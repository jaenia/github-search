import { getLastPageFromURL, parseUser, parseRepos } from '../../utils/parsers';

import mockUser from '../../__mocks__/user.json';
import mockRepos from '../../__mocks__/repos.json';
import mockParsedRepos from '../../__mocks__/parsedRepos.json';
import mockParsedUser from '../../__mocks__/parsedUser.json';

describe('Parsers', () => {
  it('should extract last page from passed rel header string', () => {
    const passed = `<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
    <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"`;
    const expected = '34';
    expect(getLastPageFromURL(passed)).toBe(expected);
  });

  it('should give parsed user object from passed values', () => {
    expect(JSON.stringify(parseUser(mockUser, '999'))).toBe(
      JSON.stringify(mockParsedUser)
    );
  });

  it('should give parsed repo list', () => {
    expect(JSON.stringify(parseRepos(mockRepos))).toBe(
      JSON.stringify(mockParsedRepos)
    );
  });
});
