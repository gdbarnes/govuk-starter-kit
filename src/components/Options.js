import React from 'react';

const Options = props => {
  const optionChoices =
    props.type === 'markup' ? (
      <div className="options markup-options">
        <button onClick={props.togglePath} value="">
          Toggle path (cdn or absolute)
        </button>
        <button onClick={props.toggleMinified} value="">
          Use minified CSS
        </button>
        {/* <button onClick={this.togglePath} value="">
          Use concatinated CSS
        </button> */}
      </div>
    ) : (
      <div className="options asset-options">
        <button onClick={props.regenerateFiles} value="">
          Regenerate files
        </button>
        <button onClick={props.browseAssets} disabled={true} value="">
          Browse assets
        </button>
        {!props.showDownload ? (
          <button onClick={props.createArchive} value="">
            Create archive file (.zip)
          </button>
        ) : (
          <button onClick={props.downloadArchive} value="">
            Download archive
          </button>
        )}
      </div>
    );
  return optionChoices;
};

export { Options };
