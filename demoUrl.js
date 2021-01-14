var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let s=req.url;
  let t=s.split('/');
  t.forEach(element => {
    res.write("<br/>"+element);
  });
  
  res.end();
}).listen(8080);