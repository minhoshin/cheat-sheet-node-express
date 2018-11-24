# CHEAT SHEET NODE EXPRESS

```
git repository by express-generator
$ npm install -g express-generator
$ express cheat-sheet-node-express && cd cheat-sheet-node-express
```

### RUN

```
$ npm install
$ npm start // node ./bin/www
$ npm run dev // pm2 start ecosystem.config.js
$ npm run production // pm2 start ecosystem.config.js --env production
```

### middleware

express-async-handler // Async Error Handling Middleware for Express
```
const asyncHandler = require('express-async-handler');
router.get('/', asyncHandler(async (req, res, next) => {
```

connect-ratelimit
```
var limiter = require('connect-ratelimit');
app = connect()
      .use(limiter({
        whitelist: ['127.0.0.1'],
        blacklist: ['example.com']
      }))
      .use(function (req, res) {
        res.end('Hello world!');
      });
```

response-time
```
var express = require('express')
var responseTime = require('response-time')
var app = express()
app.use(responseTime())
app.get('/', function (req, res) {
  res.send('hello, world!')
})
```

### Nodejs + express 프로젝트에 보안 설정하기 ( helmet, nsp, CSRF )
http://blog.clipplr.com/2017/01/nodejs-express-helmet-nsp-csrf.html

Helmet
```
 npm i --save helmet;
const helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');
```

nsp
```
$ npm i -g nsp
$ nsp check
```

csurf
```
npm i --save csurf
https://www.npmjs.com/package/csurf
```

### CHEAT SHEET NODE
```
const publicPath = path.resolve(__dirname, "public"); // express.static
app.use(express.static(publicPath));

res.redirect*'http://www.expressjs.com")
res.sendFile("/path/to/cool_song.mp3");
let entries = [];
app.locals.entries = entries; // 전역 배열 설정
fs.stat // 파일 정보 추출
res.status(404);
res.send("file not found");

res.sendFile(filepath, (err) => {
    if (err) console.log("file failed to send);
    else console.log('file send success");
})

var compression = require('compression') // 바이트 수를 줄이기 위해 응답을 압축하는 

// 클라이언트에 대한 경로 변경
let photoPath = path.resolve(__dirname, "offensive-photos-folder");
app.use("/offensive", express.static(photoPath));

// 정적 파일 라우팅
app.get("/users/:userid/profile_photo", (req, res) => {
    res.sendFile(getProfilePhotoPath(req, params.userid));
});

// api 버전 관리
var colpingChat = require('./routes/colpingChat');
app.use('/colping/v1/chat', colpingChat);
app.use('/v3/group', require('./routes/v3/group'));

// 교차 사이트 요청 위조
var Tokens = require('csrf')
```