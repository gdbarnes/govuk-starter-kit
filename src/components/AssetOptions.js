import React from 'react';

const AssetOptions = props => {
  const {
    generateAssets,
    browseAssets,
    successfulCompilation,
    createArchive,
    downloadArchive,
    archiveCreated
  } = props;
  return (
    <div>
      <h3>Asset options (view terminal for detailed progress)</h3>
      <div className="options asset-options">
        <button onClick={generateAssets}>Generate assets</button>
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
