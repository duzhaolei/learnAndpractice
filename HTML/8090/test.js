var http = require('http');
var fs = require('fs');
var domRoot = 'D:/work/learnAndpractice/HTML/8090'

var server = http.createServer(function (req,res) {
  console.log('连接成功')
  var url = req.url;

  if(url== '/'){
    url ='index.html';
  }
  var file = domRoot + url
  console.log(url)
  fs.readFile(file,function (err,data) {
    if(err){
      res.writeHeader(404,{
        "content-type":'text/html;charset="utf-8"'
      })
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end()
    }else {
      res.writeHeader(200,{
        "content-type":'text/html;charset="utf-8"'
      })
      res.write(data);
      res.end()
    }
  })
}).listen(8090)

console.log('服务器开启')