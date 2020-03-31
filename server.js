const express = require('express');

const app = express();

app.use(express.static('./dist/anguzzaj'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/anguzzaj/'}),
);

app.listen(process.env.PORT || 8080);
