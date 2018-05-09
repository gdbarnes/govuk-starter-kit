import React from 'react';

const Intro = () => (
  <div>
    <p>
      This app will generate the necessary assets and provide consistent markup to be used in ESFA
      projects. These can then be downloaded and used locally in a project or (when available)
      linked to from a CDN.
    </p>
    <p>
      Files are generated using the local npm packages listed below. These versions are compared
      with the equivalent GitHub repositories to ensure everything is up-to-date.
    </p>
  </div>
);

export { Intro };
