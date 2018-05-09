import React from 'react';
import { markupOptions } from './../helper/constants';

const MarkupOptions = props => {
  const { togglePath, path, toggleMinified, minified } = props;
  return (
    <div>
      <h3>Asset options</h3>
      <div className="options markup-options">
        <button onClick={togglePath}>Toggle path (cdn or absolute)</button>
        <button onClick={toggleMinified}>Toggle minified CSS</button>
      </div>
      <p>
        Current path{' '}
        {path === 'absolute'
          ? '(absolute): /assets/...'
          : `(cdn): ${markupOptions.cdnUrl}/assets/...`}
      </p>
      <p>Minified css: {minified ? 'Yes' : 'No'}</p>
    </div>
  );
};

export { MarkupOptions };
