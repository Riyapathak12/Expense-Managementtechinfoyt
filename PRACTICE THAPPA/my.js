const http = require('http')
const server =http.createServer((req, res)=>{
    console.log(req.url=="/")
    {
        res.end("hello it is me")
    }

} );
server.listen(8000,"127.0.0.1",()=>{
    console.log("sorry an error")
})
