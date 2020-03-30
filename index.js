const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((request, response)=> {

    let filePath = request.url;

    if (filePath == '/') {
        filePath = '/public/index.html';
    }


    filePath = __dirname+filePath;

    let fileExtension = path.extname(filePath);


    let contentType = 'text/html';
    switch (fileExtension) {
        case ".css":
            contentType = "text/css";
        break;z
        case ".js":
            contentType = "text/index";
        break;
        case ".html":
            contentType = "text/html";
        default:
            contentType = "text/html";
    }

   fs.readFile(filePath,{encoding:"UTF-8"}, (error,content)=>{
       if(!error) {

           response.writeHead(200, {"Content-Type": contentType});
           response.write(content);
           response.end();
       } else {

           response.writeHead(404, {"Content-Type": "text/html"});
           response.write("error file");
           response.end();
       }
       })


   }).listen(8080);