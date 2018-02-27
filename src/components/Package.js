import React from 'react';

const Package = props => {
  const isCurrent = props.versions.localVersion === props.versions.githubVersion;
  return (
    <li className={isCurrent ? 'package' : 'package package-outdated'}>
      <header className="package-header">
        <h2>{props.packageTitle}</h2>
        <span className="package-status">{isCurrent ? 'Up to date ✅' : 'Outdated❗️'}</span>
      </header>
      <main className="package-body">
        <p>Github version: {props.versions.githubVersion}</p>
        <p className={isCurrent ? '' : 'local-outdated'}>
          Local version: {props.versions.localVersion}{' '}
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
