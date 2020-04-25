export function getLastPageFromURL(url) {
  return url
    .split(',')[1]
    .match(/&page=[0-9]*/)[0]
    .split('=')[1];
}

export function parseUser(user, stars) {
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

export function parseRepos(repos) {
  return repos
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stargazers_count: parseInt(repo.stargazers_count, 10),
    }))
    .sort((a, b) => {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }
      return 0;
    });
}
