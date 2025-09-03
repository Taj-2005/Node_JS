const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/home'){
        res.end('Welcome to Home Page')
    }else if (req.url === '/about'){
        res.end('Welcome to About Page')
    }else if (req.url === '/contact'){
        res.end('Welcome to Contact Page')
    }else{
        res.statusCode = 404;
        res.end('404 Page Not Found')
    }
})


 server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
})


