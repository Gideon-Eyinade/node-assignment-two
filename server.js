const http = require('http');
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

// Create a server with the HTTP variable
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        let filePath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/home'){
        let filePath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/about'){
        let filePathTwo = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePathTwo, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/contact'){
        let filePathThree = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filePathThree, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
}
);

const port  = 5000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`) 
});
