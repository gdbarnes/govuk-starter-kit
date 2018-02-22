import packageJson from './../../package.json';

export const fetchGithubVersion = url => {
  return fetch(url + '?access_token=1a6552c7956b89f88cf4d5861812ec6b533182ba')
    .then(response => response.json())
    .then(versionData => atob(versionData.content).trim());
};

export const getPackageJsonVersion = repo => {
  return packageJson.dependencies[repo].replace(/^\^+/g, '').trim();
};

// fetch('/ping')
//   .then(response => console.log(response))
//   .catch(err => console.log(err));

// console.log(packageJson.dependencies['govuk_template_jinja']);

// let promises = govukRepositoryData.map(repo => {
//   return {
//     name: repo.id,
//     version: fetch(`https://api.github.com/repos/alphagov${repo.githubPath}`)
//       .then(response => response.json())
//       .then(versionData => versionData)
//   };
// });

// async function govukRepositoryData() {
//   try {
//     var data = await Promise.all([
//       {
//         name: 'elements',
//         version: await fetch(
//           'https://api.github.com/repos/alphagov/govuk_elements/contents/packages/govuk-elements-sass/VERSION.txt'
//         ).then(response => response.json())
//       },
//       {
//         name: 'toolkit',
//         version: await fetch(
//           'https://api.github.com/repos/alphagov/govuk_frontend_toolkit/contents/VERSION.txt'
//         ).then(response => response.json())
//       },
//       {
//         name: 'template',
//         version: await fetch(
//           'https://api.github.com/repos/alphagov/govuk_template_jinja/contents/VERSION'
//         ).then(response => response.json())
//       }
//     ]);
//   } catch (error) {
//     console.error(error);
//   }
// }

// govukRepositoryData();

// let promises = govukRepositoryData.map(repo =>
//   fetch(`https://api.github.com/repos/alphagov${repo.githubPath}`)
//     .then(response => response.json())
//     .then(versionData => versionData)
// );

// Promise.all(promises).then(result => console.log(result));
// const data = govukRepositoryData.map(repo => {
//   return githubVersion = fetch(`https://api.github.com/repos/alphagov${repo.githubPath}`)
//     .then(response => response.json())
//     .then(versionData => atob(versionData.content).trim());
// }

//

// return {
//   name: repo,
//   localVersion,
//   githubVersion:
// };
// });

// , repo[version]: packageJson.dependencies[repo]
// console.log(data);

// 1a6552c7956b89f88cf4d5861812ec6b533182ba
