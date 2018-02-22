const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const path = require('path');
const gulpTasks = require('./routes/gulp-tasks');
const archive = require('./routes/archive');

app.use(express.static(path.join(__dirname, 'public')));

// serveIndex allows user to use browser to view files in this folder
app.use(
  '/assets',
  serveIndex(path.join(__dirname, 'build', 'assets'), { icons: true, view: 'details' })
);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/port', (req, res) => res.send(`${port}`));
app.get('/gulp', gulpTasks.gulp);
app.get('/archive', archive.zip);
app.get('/download', archive.download);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
