const express = require('express');
const application = express();

application.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

application.get('/anky', (req, res) => {
    res.send('Chup reh');
});

application.listen(4000, () => {
    console.log('Server is running on port 4000');
});
