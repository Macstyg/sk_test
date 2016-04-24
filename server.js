var express = require('express'),
    path    = require('path'),
    data    = require('./config/data'),
    port    = process.env.PORT || 3000,
    app     = express();

app
  .use(express.static('public'))
  .get('/api/data', (req, res) => {
    res.json(data);
  })
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
  })
  .listen(port);
  console.log('Server running on localhost:3000');
