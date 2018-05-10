import React from 'react';

const Intro = () => (
  <div>
    <p>
      This app generates the necessary assets and provides markup to be used in ESFA projects. These
      can be used to start a new project or update an existing one.
    </p>
    <p>
      Local npm packages are compared with their equivalent GitHub repositories to ensure everything
      is up to date. If a package is out of date instructions are shown on how to update.
    </p>
  </div>
);

export { Intro };
