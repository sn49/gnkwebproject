// server.js 

const http = require('http');

// file system 모듈 불러오기
const fs = require('fs');   

// 서버생성   
const server = http.createServer((req, res)=>{

  fs.readFile('./map_banpick.html',(err,data)=>{
    // .writeHead()의 1번 인자는 status의 값(200,404,403,500등~), 해드에 실어 보낼 내용 
    res.writeHead(200, {
    // 개발자 도구 네트워크 탭 > header에서 확인하면 컨텐트타입을 볼수 있다.
    "Content-Type" : "text/html"
    })
    
    // index.html에서 읽은 data를 화면에 뿌림
    res.write(data)
    // 응답 끝내기 명령어 꼭 쓰기
    res.end()
    });
});
server.listen(3000);
  