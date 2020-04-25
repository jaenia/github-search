import { renderHook, act } from '@testing-library/react-hooks';

import useSearchUser from '../../hooks/useSearchUser';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('useSearchUser hook', () => {
  it('should return the initial state data', () => {
    const { result } = renderHook(() => useSearchUser());
    const { search, loading, result: receivedResult, error } = result.current;

    const resultExpected = {
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
    };

    const errorExpected = {
      message: '',
      isError: false,
    };

    expect(search).toEqual('');
    expect(loading).toEqual(false);
    expect(JSON.stringify(receivedResult)).toEqual(
      JSON.stringify(resultExpected)
    );
    expect(JSON.stringify(error)).toEqual(JSON.stringify(errorExpected));
  });

  it('should change search state and call history.push with given data', () => {
    const { result } = renderHook(() => useSearchUser());
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange({ target: { value: 'test' } });
    });
    const { search, handleSubmit } = result.current;
    expect(search).toBe('test');
    act(() => {
      handleSubmit({ preventDefault: jest.fn() });
    });
    expect(mockHistoryPush).toBeCalledWith('/user/test');
  });
});
