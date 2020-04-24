import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as api from '../services/api';

import { errorMessages } from '../utils/types';

function parseUser(user, stars) {
  return {
    name: user.name,
    login: user.login,
    avatar_url: user.avatar_url,
    details: {
      company: user.company.replace('@', ''),
      location: user.location,
      starred: stars,
      publicRepos: user.public_repos,
      followers: user.followers,
    },
  };
}

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

  async function getSearch(searchText) {
    if (error.isError) setError({ message: '', isError: false });
    setLoading(true);
    try {
      const [user, repositories, stars] = await Promise.all([
        api.getUser(searchText),
        api.getRepos(searchText),
        api.getUserStars(searchText),
      ]);

      const parsedUser = parseUser(user, stars);

      const parsedRepos = repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
      }));

      setResult({ user: parsedUser, repos: parsedRepos });
      setSearch('');
      setLoading(false);
    } catch (err) {
      setError({
        message:
          err.message === 'Not Found'
            ? errorMessages.notFound
            : errorMessages.generic,
        isError: true,
      });
      setLoading(false);
    }
  }

  return {
    search,
    loading,
    result,
    error,
    setSearch,
    handleInputChange,
    handleSubmit,
    getSearch,
  };
}
