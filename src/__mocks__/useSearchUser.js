export default {
  search: 'test',
  loading: true,
  result: {
    user: {
      name: '',
      login: '',
      avatar_url: '',
      details: {
        company: '',
        location: '',
        starred: '',
        publicRepos: '',
        followers: '',
      },
    },
    repos: [],
  },
  error: {
    isError: false,
    message: '',
  },
  handleInputChange: jest.fn(),
  handleSubmit: jest.fn(),
  getSearch: jest.fn(),
};
