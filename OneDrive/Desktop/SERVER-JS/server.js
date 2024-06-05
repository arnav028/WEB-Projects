/* rendering HTML and CSS
 */
const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {
        "Content-Type": 'text/html'
    });

    if(req.url =='/') file = 'index.html'
    else if(req.url == '/profile') file ='profile.html';
else file ='/sign.html';
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.end(data);
    });
});

server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Server started at', port);
});
