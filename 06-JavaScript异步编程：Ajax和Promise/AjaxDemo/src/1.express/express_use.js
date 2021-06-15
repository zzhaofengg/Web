// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/',(requset,response) => {
    //设置响应
    response.send('hello express!');
});

//4.监听端口，启动服务

app.listen(8000, () =>{
    console.log('服务已经启动，监听端口8000中......');
});