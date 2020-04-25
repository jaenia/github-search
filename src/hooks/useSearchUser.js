import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as api from '../services/api';
import { parseUser, parseRepos } from '../utils/parsers';

import { errorMessages } from '../utils/types';

export default function useSearchUser() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: '',
    isError: false,
  });
  const [result, setResult] = useState({
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
  });
  const history = useHistory();

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/user/${search}`);
    },
    [search, history]
  );

  function getSearch(searchText) {
    if (error.isError) setError({ message: '', isError: false });
    setLoading(true);

    Promise.all([
      api.getUser(searchText),
      api.getRepos(searchText),
      api.getUserStars(searchText),
    ])
      .then(([user, repositories, stars]) =>
        setResult({
          user: parseUser(user, stars),
          repos: parseRepos(repositories),
        })
      )
      .catch((err) =>
        setError({
          message:
            err.message === 'Not Found'
              ? errorMessages.notFound
              : errorMessages.generic,
          isError: true,
        })
      )
      .finally(() => setLoading(false));
  }

  return {
    search,
    loading,
    result,
    error,
    handleInputChange,
    handleSubmit,
    getSearch,
  };
}
