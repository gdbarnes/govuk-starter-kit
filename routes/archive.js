const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const bytesToSize = bytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes}${sizes[i]})`;
  return `${(bytes / 1024 * i).toFixed()}${sizes[i]}`;
};

const downloadFilePath = path.join(__dirname, '..', 'build', 'downloads');
const fileName = 'assets.zip';

exports.zip = (req, res) => {
  console.log('\nCreating zip... 🗜\n');

  if (!fs.existsSync(downloadFilePath)) {
    fs.mkdirSync(downloadFilePath);
  }

  const output = fs.createWriteStream(path.join(downloadFilePath, fileName));

  output.on('close', function() {
    console.log('...zip created (' + bytesToSize(archive.pointer()) + ')\n');
  });

  output.on('end', function() {
    console.log('Data has been drained');
  });
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function(err) {
    res.status(500).send({ error: err.message });
  });

  archive.pipe(output);

  const directory = path.join(__dirname, '..', 'build', 'assets');
  archive.directory(directory, false);
  archive.finalize();

  res.send('<h1>Archive created.</h1>');
};

exports.download = (req, res) => {
  var file = path.join(downloadFilePath, fileName);
  res.download(file);
};
