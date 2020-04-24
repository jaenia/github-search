import { getLastPageFromURL } from '../utils/parsers';

const baseURL = 'https://api.github.com';

export function getUser(user) {
  return fetch(`${baseURL}/users/${user}`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
}

export function getRepos(user) {
  return fetch(`${baseURL}/users/${user}/repos`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
}

export function getUserStars(user) {
  return fetch(`${baseURL}/users/${user}/starred?per_page=1`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return getLastPageFromURL(res.headers.get('link'));
  });
}
