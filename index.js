const http = require("http");
const fs = require("fs");
const { Server } = require("socket.io")

let va = "/.about";

// all about servers 

const server = http.createServer((req, res) => {

    if(req.url == "/"){

    fs.readFile("/home/jayanth/dev/js-project/scrible.com/public/index.html", (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain"});
            res.end("there is an error");


        }

        res.writeHead(404, { "Content-Type": "text/html"});
            res.end(data);
    })}

    if(req.url == va) {
         fs.readFile("/home/jayanth/dev/js-project/scrible.com/user.html", (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain"});
            res.end("there is an error");


        }

        res.writeHead(404, { "Content-Type": "text/html"});
            res.end(data);
    })}

})

// dealing with sockets and everything related to sockets 
        let y;
        const io = new Server(server);
        
    
        io.on("connection", (sockets) => {
            
           console.log("my server is up");
           sockets.on("draw", (x) => {
            
             sockets.broadcast.emit("project", x);

            
           })
           
            
            

           
        })





// all about listen for the port 
        server.listen(8080, () => {
         console.log('Server running at http://localhost:8080');
                });

