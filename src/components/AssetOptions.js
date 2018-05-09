import React from 'react';

const AssetOptions = props => {
  const {
    generateFiles,
    browseAssets,
    successfulCompilation,
    createArchive,
    downloadArchive,
    archiveCreated
  } = props;
  return (
    <div>
      <h3>Markup options</h3>
      <div className="options asset-options">
        <button onClick={generateFiles}>Generate files</button>
        <button onClick={browseAssets} disabled={!successfulCompilation}>
          Browse assets
        </button>
        <button onClick={createArchive} disabled={!successfulCompilation}>
          Create archive file (assets.zip)
        </button>
        <button onClick={downloadArchive} disabled={!archiveCreated}>
          Download assets.zip
        </button>
      </div>
    </div>
  );
};

export { AssetOptions };
