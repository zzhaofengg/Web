// 1.引入express
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello Ajax by nodemon!');

});
//针对ie缓存
app.get('/ie', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello IE');

});

//延时响应
app.all('/delay', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    setTimeout(() => {
        response.send('Delay response');
    }, 1000);

});

//JQuery服务
app.all('/jquery-server', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    const data = { name: 'zhaofeng' };
    const str = JSON.stringify(data);
    response.send(str);


});
//axios服务
app.all('/axios-server', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    const data = { name: 'zhaofeng' };
    const str = JSON.stringify(data);
    response.send(str);


});

//fetch服务
app.all('/fetch-serve:r', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    const data = { name: 'zhaofeng' };
    const str = JSON.stringify(data);
    response.send(str);


});
app.all('/json-server', (requset, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //响应一个数据
    const data = {
        name: 'zhaofeng'

    };
    //对对象进行字符串的转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);

});

app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("Jsonp server hello!")');
    const data = {
        name: 'zhaofeng'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data);

    //返回结果
    response.end(`handle(${str})`);
});

app.all('/check-username', (request, response) => {
    // response.send('console.log("Jsonp server hello!")');
    const data = {
        exist: 1,
        msg: '用户名已存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);

    //返回结果
    response.end(`handle(${str})`);
});

app.all('/promise-server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    const data = { retCode: 0, msg: 'zhaofeng' }
    let str = JSON.stringify(data) ;

    //设置响应体
    response.send(str);
});

app.all('/promise-a', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('receieve by promise-a');
});

app.all('/promise-b', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('receieve by promise-b');
});

app.all('/promise-c', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('receieve by promise-c');
});

app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("Jsonp server hello!")');
    const data = {
        name: 'zhaofeng',
        city: ['北京', '南京', '驻马店']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);

    //接受callback参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});
//4.监听端口，启动服务

app.listen(8000, () => {
    console.log('服务已经启动，监听端口8000中......');
});