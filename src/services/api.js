import { getLastPageFromURL } from '../utils/parsers';

const baseURL = 'https://api.github.com';

export function getUser(user) {
  return fetch(`${baseURL}/users/${user}`).then((res) => res.json());
}

export function getRepos(user) {
  return fetch(`${baseURL}/users/${user}/repos`).then((res) => res.json());
}

export function getUserStars(user) {
  return fetch(`${baseURL}/users/${user}/starred?per_page=1`).then((res) => {
    return getLastPageFromURL(res.headers.get('link'));
  });
}
