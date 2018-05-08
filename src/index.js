import React from 'react';
import ReactDOM from 'react-dom';
import { fetchGithubVersion, getPackageJsonVersion } from './helper/functions';
import App from './containers/App';

import './css/styles.css';
import registerServiceWorker from './registerServiceWorker';

const getGithubVersions = async () => {
  const [template, elements, toolkit] = [
    {
      githubVersion: await fetchGithubVersion(
        'https://api.github.com/repos/alphagov/govuk_template_jinja/contents/VERSION'
      ),
      localVersion: getPackageJsonVersion('govuk_template_jinja')
    },
    {
      githubVersion: await fetchGithubVersion(
        'https://api.github.com/repos/alphagov/govuk_elements/contents/packages/govuk-elements-sass/VERSION.txt'
      ),
      localVersion: getPackageJsonVersion('govuk-elements-sass')
    },
    {
      githubVersion: await fetchGithubVersion(
        'https://api.github.com/repos/alphagov/govuk_frontend_toolkit/contents/VERSION.txt'
      ),
      localVersion: getPackageJsonVersion('govuk_frontend_toolkit')
    }
  ];

  return {
    template,
    elements,
    toolkit
  };
};

ReactDOM.render(<App data={getGithubVersions()} />, document.getElementById('root'));
registerServiceWorker();
