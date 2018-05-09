const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const bytesToSize = (bytes, decimalPlaces) => {
  if (0 === bytes) return '0 Bytes';
  const divisor = 1024,
    decimals = decimalPlaces || 2,
    unit = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    unitChooser = Math.floor(Math.log(bytes) / Math.log(divisor));
  return (
    parseFloat((bytes / Math.pow(divisor, unitChooser)).toFixed(decimals)) + ' ' + unit[unitChooser]
  );
};

const downloadFilePath = path.join(__dirname, '..', 'build', 'downloads');
const fileName = 'assets.zip';

exports.zip = (req, res) => {
  console.log('\n◆ Creating archive 🗜\n');

  if (!fs.existsSync(downloadFilePath)) {
    fs.mkdirSync(downloadFilePath);
  }

  const output = fs.createWriteStream(path.join(downloadFilePath, fileName));

  output.on('close', function() {
    console.log('◆ assets.zip created ✅  (' + bytesToSize(archive.pointer()) + ')\n');
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

  res.send('Archive created');
};

exports.download = (req, res) => {
  var file = path.join(downloadFilePath, fileName);
  res.download(file);
};
