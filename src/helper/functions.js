import packageJson from './../../package.json';

export const fetchGithubVersion = url => {
  return fetch(url + '?access_token=' + process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)
    .then(response => response.json())
    .then(versionData => atob(versionData.content).trim());
};

export const getPackageJsonVersion = repo => {
  return packageJson.dependencies[repo].replace(/^\^+/g, '').trim();
};
