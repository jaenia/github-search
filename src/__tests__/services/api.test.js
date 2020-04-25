import * as api from '../../services/api';

const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});
const fetchMock = jest.fn(() => mockFetchPromise);
jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

describe('services/api', () => {
  it('should make get on /users/test', () => {
    api.getUser('test');
    expect(fetchMock).toBeCalledWith('https://api.github.com/users/test');
  });

  it('should make get on /users/test/repos', () => {
    api.getRepos('test');
    expect(fetchMock).toBeCalledWith('https://api.github.com/users/test/repos');
  });

  it('should make get on /users/test/starred', () => {
    api.getUserStars('test');
    expect(fetchMock).toBeCalledWith(
      'https://api.github.com/users/test/starred?per_page=1'
    );
  });
});
