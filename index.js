const http = require("http");
const fs = require("fs");
const {sockets} = require("socket.io");

const server = http.createServer((req, res) => {

    fs.readFile("/home/jayanth/dev/js-project/scrible-clone/public/index.html", (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain"});
            res.end("there is an error");


        }

        res.writeHead(404, { "Content-Type": "text/html"});
            res.end(data);
    })

})
    

        server.listen(8080, () => {
         console.log('Server running at http://localhost:8080');
                });

