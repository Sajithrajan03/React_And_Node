const http = require('http');
const fs = require('fs');
function rqlisten(req,res){
    const {url,method} = req;
    // console.log(url,method);
    if (url ==='/'){
        res.setHeader('Content-type','text/html');
        
        res.write('<html>')
        res.write('<head><title>Learn Node.js</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type= "submit" value= "Send"></form></body>')
        
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method =='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);

        })
        req.on('end',()=>{
            // const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
        })
    }
    
}
const server = http.createServer(rqlisten);


server.listen(3000);