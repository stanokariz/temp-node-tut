const http = require('http')
const server = http.createServer((req,res)=> {
    if(req.url === '/') {
        res.end('Welcome to Javascript World')
    } 
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant't seem to find the page you're looking for</p>
        <a href="/"> BackHome</a>
    `)
})

server.listen(5000)