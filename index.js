const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hey Builders!');
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});

app.post('/', (req, res) => {
    res.send('Post request!');
    console.log('Post request!');
});

