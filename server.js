const PORT_DEFAULT = 8080;

const path = require('path');

const express = require('express');

const PORT = process.env.PORT || PORT_DEFAULT;

const app = express();

app.use(express.static(__dirname));
app.use(express(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
