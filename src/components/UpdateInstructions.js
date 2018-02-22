import React from 'react';

const UpdateInstructions = () => (
  <div className="update-instructions">
    <h3>How to update</h3>
    <ul>
      <li>
        Open the <code className="body-code">package.json</code> file at the root of this project in
        a text editor
      </li>
      <li>Locate the out of date package in the 'dependencies' section</li>
      <li>Change the version number to the GitHub version listed on this page and save the file</li>
      <li>
        In your terminal, browse to the folder where the package.json file is located and{' '}
        <code className="body-code">npm install</code>
      </li>
    </ul>
  </div>
);

export { UpdateInstructions };
