const exec = require('child_process').exec;

exports.gulp = (req, res) => {
  console.log('\n◆ Gulp tasks started 🥤\n');
  exec('gulp', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error} ❌`);
      return;
    }

    if (stderr) {
      console.error(`exec stderr: ${stderr} ❌`);
      return;
    }

    console.log(stdout);
    console.log('◆ Gulp tasks complete ✅\n');
  });
  res.send('Styles built');
};
