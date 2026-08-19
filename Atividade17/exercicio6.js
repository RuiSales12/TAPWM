let http = require('http');
let server = http.createServer(function(req,res){
    res.end("<html><body>Oi professora</body></html>");
});

server.listen(3000);
console.log('Server Iniciado')