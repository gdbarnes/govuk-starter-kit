import packageJson from './../../package.json';

export const fetchGithubVersion = url => {
  const githubAccessToken = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    ? `?access_token=${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    : '';
  return fetch(url + githubAccessToken)
    .then(response => response.json())
    .then(versionData => atob(versionData.content).trim());
};

export const getPackageJsonVersion = repo => {
  return packageJson.dependencies[repo].replace(/^\^+/g, '').trim();
};
