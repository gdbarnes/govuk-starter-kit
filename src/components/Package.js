import React from 'react';

const Package = props => {
  const isCurrent = props.versions.localVersion === props.versions.githubVersion;
  return (
    <li className={isCurrent ? 'package' : 'package package-outdated'}>
      <header className="package-header">
        <h2>{props.packageTitle}</h2>
        <p className="package-status">
          {isCurrent ? 'Up to date - ✅' : 'Package is out of date -❗️'}
        </p>
      </header>
      <main className="package-body">
        <p>Github version: {props.versions.githubVersion}</p>
        <p>
          Local version:{' '}
          <span className={isCurrent ? '' : 'local-outdated'}>{props.versions.localVersion}</span>
        </p>
        {isCurrent ? (
          ''
        ) : (
          <button onClick={props.howToUpdate}>How do I update this package?</button>
        )}
      </main>
    </li>
  );
};

export { Package };
