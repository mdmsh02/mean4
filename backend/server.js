var express = require('express');
var cors = require('cors');
var app = express();

const posts = [
    {message: 'hi'},
    {message: 'hello'}
];
app.use(cors());
app.use('/posts', (request, response)=> {
    response.send(posts);
})

app.listen(3000);