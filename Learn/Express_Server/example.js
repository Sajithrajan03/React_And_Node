import http from 'http';
function rqlisten(req,res){
    console.log(req);
}
const server = http.createServer(rqlisten);

server.listen(3000);