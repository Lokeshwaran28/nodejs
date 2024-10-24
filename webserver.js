//step1  importing library like http
const http1=require('http');

//step2 creating a server
const webserver=http1.createServer((req,res)=>{
    res.end("Hello Chennai");//response to the client
});
//step 3 assign the port numbre for the server
//step4 listening the server 

const port=3500;
webserver.listen(port,()=>{
console.log("The current server  running in http://localhost:3500");
});
