import React from 'react';
import { markupOptions } from './../helper/constants';

const MarkupOptions = props => {
  const { togglePath, path, toggleMinified, minified } = props;
  return (
    <div>
      <h3>Markup options</h3>
      <div className="options markup-options">
        <button onClick={togglePath}>Toggle path (cdn or absolute)</button>

        <button onClick={toggleMinified}>Toggle minified CSS</button>
      </div>
      <p>
        Example path:{' '}
        {path === 'absolute'
          ? `(absolute): /assets/stylesheets/govuk-template${
              minified ? markupOptions.minifiedSuffix : ''
            }.css`
          : `(cdn): ${markupOptions.cdnUrl}/assets/stylesheets/govuk-template${
              minified ? markupOptions.minifiedSuffix : ''
            }.css`}
      </p>
    </div>
  );
};

export { MarkupOptions };
