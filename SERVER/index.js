const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer = http.createServer((req,res)=>{
    if(req.url=== '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.url}: New Req Recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt',log , (err,data)=>{
        switch(myUrl.pathname){
            case('/') : res.end('hello from home')
            break;
            case('/about') :
            const username = myUrl.query.name ;
             res.end(`hi ${username}`);
            break;
            case('/contact') : res.end('hello from contact')
            break;
            case('/meow'): res.end('hello from meow')
        }
    })
    //console.log(req.headers);
    //res.end('Hello from Serv')
});
myServer.listen(8000,()=>console.log("Server Started"));